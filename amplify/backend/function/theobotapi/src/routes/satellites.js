const express = require('express');
const router = express.Router();
const makeGraphqlRequest = require('../utils/graphqlRequest');
const { createSatellite, updateSatellite, deleteSatellite } = require('../graphql/mutations');
const { listSatellites, getSatellite } = require('../graphql/queries');

// POST: Create a new satellite
router.post('/', async (req, res) => {
  try {
    const satelliteData = req.body;
    const response = await makeGraphqlRequest(createSatellite, { input: satelliteData });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// GET: List all satellites
router.get('/', async (req, res) => {
  try {
    const response = await makeGraphqlRequest(listSatellites);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving satellites', error });
  }
});

// GET: Get a satellite by specific id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(getSatellite, { id });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'Satellite not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving satellite', error });
  }
});

// PUT: Update a specific satellite
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const satelliteData = req.body;
    const requestData = {
      input: {
        id: id,
        ...satelliteData
      }
    };
    const response = await makeGraphqlRequest(updateSatellite, requestData);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// DELETE: Deletes a satellite
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(deleteSatellite, { id });
    res.status(200).json({ message: 'Satellite deleted', response });
  } catch (error) {
    res.status(404).json({ message: 'Satellite not found', error });
  }
});

module.exports = router;
