const express = require('express');
const router = express.Router();
const makeGraphqlRequest = require('../utils/graphqlRequest');
const { createProject, updateProject, deleteProject } = require('../graphql/mutations');
const { listProjects, getProject, projectsByMoonID } = require('../graphql/queries');
const { createProjectInJira } = require('../utils/jira');

// List all projects
router.get('/', async (req, res) => {
  try {
    const response = await makeGraphqlRequest(listProjects);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving projects', error });
  }
});

// Create a new project
router.post('/', async (req, res) => {
    try {
      const projectData = req.body;
  
      // Create Project in Jira and get the ID
      const jiraProjectId = await createProjectInJira(projectData);

      // Prepare data for GraphQL request
      const graphqlInput = {
        id: jiraProjectId,
        moonID: projectData.moonID,
        name: projectData.name,
        description: projectData.description,
        status: projectData.status,
      };

      console.log("GtaphQL Input: ", graphqlInput);
      const graphQLResponse = await makeGraphqlRequest(createProject, { input: graphqlInput });
      res.status(201).json(graphQLResponse);
    } catch (error) {
      console.error('Failed to create project:', error);
      res.status(400).json({ message: 'Failed to create project', error });
    }
});


// Get a project by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(getProject, { id });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: 'Project not found', error });
  }
});

// Update a project
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const projectData = req.body;
    const response = await makeGraphqlRequest(updateProject, { input: { id, ...projectData } });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// Delete a project
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(deleteProject, { id });
    res.status(200).json({ message: 'Project deleted', response });
  } catch (error) {
    res.status(404).json({ message: 'Project not found', error });
  }
});

// Get projects by moon ID
router.get('/byMoon/:moonID', async (req, res) => {
  try {
    const { moonID } = req.params;
    const response = await makeGraphqlRequest(projectsByMoonID, { moonID });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving projects', error });
  }
});

module.exports = router;
