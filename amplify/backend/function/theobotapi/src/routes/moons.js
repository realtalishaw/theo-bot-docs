const express = require('express');
const router = express.Router();
const makeGraphqlRequest = require('../utils/graphqlRequest');
const { createMoon, updateMoon, deleteMoon } = require('../graphql/mutations');
const { listMoons, getMoon, moonsByPlanetID } = require('../graphql/queries');

// GET: List all moons
router.get('/', async (req, res) => {
  try {
    const response = await makeGraphqlRequest(listMoons);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving moons', error });
  }
});

// GET: Get a moon by specific id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(getMoon, { id });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'Moon not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving moon', error });
  }
});

// PUT: Update a specific moon
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const moonData = req.body;
    const requestData = {
      input: {
        id: id,
        ...moonData
      }
    };
    const response = await makeGraphqlRequest(updateMoon, requestData);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// DELETE: Deletes a moon
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(deleteMoon, { id });
    res.status(200).json({ message: 'Moon deleted', response });
  } catch (error) {
    res.status(404).json({ message: 'Moon not found', error });
  }
});

// GET: Get moons by planet ID
router.get('/byPlanet/:planetID', async (req, res) => {
  try {
    const { planetID } = req.params;
    const response = await makeGraphqlRequest(moonsByPlanetID, { planetID });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving moons by planet ID', error });
  }
});

module.exports = router;
