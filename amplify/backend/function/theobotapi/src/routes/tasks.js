const express = require('express');
const router = express.Router();
const makeGraphqlRequest = require('../utils/graphqlRequest');
const { createTaskInJira } = require('../utils/jira');
const { createTask, updateTask, deleteTask } = require('../graphql/mutations');
const { listTasks, getTask, tasksByProjectID } = require('../graphql/queries');

// GET: List all tasks
router.get('/', async (req, res) => {
  try {
    const response = await makeGraphqlRequest(listTasks);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tasks', error });
  }
});

// POST: Create a new task
router.post('/', async (req, res) => {
  try {
    // Extract necessary data from request body
    const { title, description, assignee, projectID, dueDate, notes, status, taskType } = req.body;

    // Create a new task in Jira
    console.log('Creating task in Jira...');
    const jiraTask = await createTaskInJira(title, description, projectID, dueDate, taskType);
    const jiraTaskID = jiraTask.id;
    console.log('Task created in Jira:', jiraTaskID);
    
    // Create a new task in the database using the Jira task ID
    const graphQLResponse = await makeGraphqlRequest(createTask, {
      input: {
        description,
        dueDate,
        id: jiraTaskID,
        notes,
        projectID,
        status,
        title,
      }
   });
   
    console.log('Task created:', graphQLResponse);

    // Send a success response
    res.status(200).json({ task: graphQLResponse });
  } catch (error) {
    console.error('Error creating task:', error.response.data.errors);
    res.status(500).json({ error: error.toString(), details: error.response.data.errors });
  }
  
});


// GET: Get a task by specific id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(getTask, { id });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving task', error });
  }
});

// PUT: Update a specific task
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const taskData = req.body;
    const requestData = {
      input: {
        id: id,
        ...taskData
      }
    };
    const response = await makeGraphqlRequest(updateTask, requestData);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// DELETE: Deletes a task
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(deleteTask, { id });
    res.status(200).json({ message: 'Task deleted', response });
  } catch (error) {
    res.status(404).json({ message: 'Task not found', error });
  }
});

// GET: List tasks associated with a project
router.get('/byProject/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;
    const response = await makeGraphqlRequest(tasksByProjectID, { projectId });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tasks for project', error });
  }
});

module.exports = router;
