const axios = require('axios');

const graphqlEndpoint = process.env.API_THEOBOTDOCS_GRAPHQLAPIENDPOINTOUTPUT
const apiKey = process.env.API_THEOBOTDOCS_GRAPHQLAPIKEYOUTPUT

async function makeGraphqlRequest(query, variables = {}) {
  try {
    const response = await axios({
      url: graphqlEndpoint,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      data: {
        query,
        variables,
      },
    });

    if (response.data.errors) {
      console.error("GraphQL Errors:", response.data.errors);
      throw new Error('GraphQL Error');
    }

    return response.data.data;
  } catch (error) {
    console.error("Request Error:", error);
    throw error;
  }
}

module.exports = makeGraphqlRequest;
