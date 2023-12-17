const express = require('express');
const router = express.Router();
const makeGraphqlRequest = require('../utils/graphqlRequest');
const { createFile, updateFile, deleteFile } = require('../graphql/mutations');
const { listFiles, getFile, listMoonFiles, listTaskFiles, listProjectFiles } = require('../graphql/queries');

// GET: List all files
router.get('/', async (req, res) => {
  try {
    const response = await makeGraphqlRequest(listFiles);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving files', error });
  }
});

// POST: Create a new file
router.post('/', async (req, res) => {
  try {
    const fileData = req.body;
    const response = await makeGraphqlRequest(createFile, { input: fileData });
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// GET: Get a file by specific id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(getFile, { id });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'File not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving file', error });
  }
});

// PUT: Update a specific file
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const fileData = req.body;
    const requestData = {
      input: {
        id: id,
        ...fileData
      }
    };
    const response = await makeGraphqlRequest(updateFile, requestData);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// DELETE: Deletes a file
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(deleteFile, { id });
    res.status(200).json({ message: 'File deleted', response });
  } catch (error) {
    res.status(404).json({ message: 'File not found', error });
  }
});

// GET: List files associated with a moon
router.get('/moon/:moonId', async (req, res) => {
  try {
    const { moonId } = req.params;
    const response = await makeGraphqlRequest(listMoonFiles, { moonId });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving moon files', error });
  }
});

// GET: List files associated with a task
router.get('/task/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params;
    const response = await makeGraphqlRequest(listTaskFiles, { taskId });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving task files', error });
  }
});

// GET: List files associated with a project
router.get('/project/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;
    const response = await makeGraphqlRequest(listProjectFiles, { projectId });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving project files', error });
  }
});

module.exports = router;
