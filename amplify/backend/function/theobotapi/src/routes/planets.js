const express = require('express');
const router = express.Router();
const makeGraphqlRequest = require('../utils/graphqlRequest');
const { createPlanet, updatePlanet, deletePlanet } = require('../graphql/mutations');
const { listPlanets, getPlanet } = require('../graphql/queries');

// GET: List all planets
router.get('/', async (req, res) => {
  try {
    const response = await makeGraphqlRequest(listPlanets);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving planets', error });
  }
});

// POST: Create a new planet
router.post('/', async (req, res) => {
  try {
    const planetData = req.body;
    const response = await makeGraphqlRequest(createPlanet, { input: planetData });
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// GET: Get a planet by specific id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(getPlanet, { id });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'Planet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving planet', error });
  }
});

// PUT: Update a specific planet
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const planetData = req.body;
    const requestData = {
      input: {
        id: id,
        ...planetData
      }
    };
    const response = await makeGraphqlRequest(updatePlanet, requestData);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// DELETE: Deletes a planet
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(deletePlanet, { id });
    res.status(200).json({ message: 'Planet deleted', response });
  } catch (error) {
    res.status(404).json({ message: 'Planet not found', error });
  }
});

module.exports = router;
