const express = require('express');
const router = express.Router();
const makeGraphqlRequest = require('../utils/graphqlRequest');
const { createUser, updateUser, deleteUser } = require('../graphql/mutations');
const { listUsers, getUser } = require('../graphql/queries');


// POST: Create a new user
router.post('/', async (req, res) => {
  try {
    const userData = req.body;
    const response = await makeGraphqlRequest(createUser, { input: userData });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});

// GET: List all users
router.get('/', async (req, res) => {
  try {
    const response = await makeGraphqlRequest(listUsers);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
});

// GET: Get user by specific id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(getUser, { id });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
});

// PUT: Update a specific user
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const requestData = {
      input: {
        id: id,
        ...userData
      }
    };
    const response = await makeGraphqlRequest(updateUser, requestData);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
});


// DELETE: Deletes a user
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await makeGraphqlRequest(deleteUser, { id });
    res.status(200).json({ message: 'User deleted', response });
  } catch (error) {
    res.status(404).json({ message: 'User not found', error });
  }
});

// POST: Verifies a user (placeholder implementation)
router.post('/verify/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Step 1: Update user status to 'CONFIRMED'
    const updateResponse = await makeGraphqlRequest(updateUser, { 
      input: { 
        id: id, 
        status: "CONFIRMED" 
      } 
    });

    // Step 2: Generate digital membership card
    const membershipCard = await generateMembershipCard(updateResponse);

    // Step 3: Return membership card and success message
    res.status(200).json({ message: 'User verified', membershipCard: membershipCard });
  } catch (error) {
    res.status(400).json({ message: 'Verification failed', error });
  }
});

async function generateMembershipCard(userData) {
  // Implement the logic to generate a digital membership card
  // This could be a function that creates an image, PDF, or integrates with a digital wallet service.
  // Return the membership card data (e.g., URL, binary data, etc.)

  // Placeholder implementation
  return "TODO: Membership Card Data or URL";
}


module.exports = router;
