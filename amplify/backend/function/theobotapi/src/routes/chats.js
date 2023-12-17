const express = require('express');
const router = express.Router();
const makeGraphqlRequest = require('../utils/graphqlRequest');
const { createChat, updateChat, deleteChat } = require('../graphql/mutations');
const { listChats, getChat } = require('../graphql/queries');

// GET: List all chat messages
router.get('/', async (req, res) => {
  try {
    const response = await makeGraphqlRequest(listChats);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving chats', error });
  }
});

// POST: Create a new chat message
router.post('/', async (req, res) => {
  try {
    const chatData = req.body;
    const response = await makeGraphqlRequest(createChat, { input: chatData });
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// GET: Get a chat message by specific id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(getChat, { id });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'Chat message not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving chat message', error });
  }
});

// PUT: Update a specific chat message
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const chatData = req.body;
    const requestData = {
      input: {
        id: id,
        ...chatData
      }
    };
    const response = await makeGraphqlRequest(updateChat, requestData);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// DELETE: Deletes a chat message
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(deleteChat, { id });
    res.status(200).json({ message: 'Chat message deleted', response });
  } catch (error) {
    res.status(404).json({ message: 'Chat message not found', error });
  }
});

module.exports = router;
