const express = require('express');
const router = express.Router();
const makeGraphqlRequest = require('../utils/graphqlRequest');
const { createEvent, updateEvent, deleteEvent } = require('../graphql/mutations');
const { listEvents, getEvent } = require('../graphql/queries');

// GET: List all events
router.get('/', async (req, res) => {
  try {
    const response = await makeGraphqlRequest(listEvents);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving events', error });
  }
});

// POST: Create a new event
router.post('/', async (req, res) => {
  try {
    const eventData = req.body;
    const response = await makeGraphqlRequest(createEvent, { input: eventData });
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// GET: Get an event by specific id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(getEvent, { id });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving event', error });
  }
});

// PUT: Update a specific event
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const eventData = req.body;
    const requestData = {
      input: {
        id: id,
        ...eventData
      }
    };
    const response = await makeGraphqlRequest(updateEvent, requestData);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// DELETE: Deletes an event
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(deleteEvent, { id });
    res.status(200).json({ message: 'Event deleted', response });
  } catch (error) {
    res.status(404).json({ message: 'Event not found', error });
  }
});

module.exports = router;
