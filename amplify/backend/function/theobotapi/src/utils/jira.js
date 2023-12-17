const axios = require('axios');

async function createProjectInJira(projectData) {
  const jiraApiUrl = 'https://theometrics.atlassian.net/rest/api/3/project';
  const jiraEmail = "misstalishawhite@gmail.com";
  const jiraApiToken = process.env.JIRA_API;
  const jiraAuth = Buffer.from(`${jiraEmail}:${jiraApiToken}`).toString('base64');

  const jiraProjectData = {
    leadAccountId: projectData.projectLead, 
    name: projectData.name,
    key: generateProjectKey(projectData.name),
    projectTypeKey: 'software',
    description: projectData.description
  };

  try {
    const response = await axios.post(jiraApiUrl, jiraProjectData, {
      headers: {
        'Authorization': `Basic ${jiraAuth}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    return response.data.id;
  } catch (error) {
    console.error('Error creating project in Jira:', error);
    throw error;
  }
}

async function getProjectKey(projectId) {
  console.log("projectId", projectId)
  const jiraApiUrl = `https://theometrics.atlassian.net/rest/api/3/project/${projectId}`;
  console.log("jiraApiUrl", jiraApiUrl)
  const jiraEmail = "misstalishawhite@gmail.com";
  const jiraApiToken = process.env.JIRA_API;
  const jiraAuth = Buffer.from(`${jiraEmail}:${jiraApiToken}`).toString('base64');

  try {
    const response = await axios.get(jiraApiUrl, {
      headers: {
        'Authorization': `Basic ${jiraAuth}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    console.log("getProjectKey response.data", response.data)
    const projectData = response.data;
    return projectData.key; // The key of the project
  } catch (error) {
    console.error('Error fetching project key from Jira:', error);
    throw error;
  }
}

async function createTaskInJira(title, description, projectID, dueDate, taskType) {
  console.log("projectId inside createTaskinJira", projectID);
  const jiraApiUrl = 'https://theometrics.atlassian.net/rest/api/3/issue';
  const jiraEmail = "misstalishawhite@gmail.com";
  const jiraApiToken = process.env.JIRA_API;
  const jiraAuth = Buffer.from(`${jiraEmail}:${jiraApiToken}`).toString('base64');
  
  // Prepare the task data
  const jiraTaskData = {
    fields: {
      project: {
        id: projectID
      },
      summary: title,
      description: {
        content: [
          {
            type: "paragraph",
            content: [
              {
                text: description,
                type: "text"
              }
            ]
          }
        ],
        type: "doc",
        version: 1
      },
      issuetype: {
        id: taskType
      },
      duedate: dueDate
    },
    update: {}
  };
  console.log("jiraTaskData", jiraTaskData);

  try {
    const response = await axios.post(jiraApiUrl, jiraTaskData, {
      headers: {
        'Authorization': `Basic ${jiraAuth}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    console.log("Jira task data response.data", response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating task in Jira:', error);
    throw error;
  }
}




module.exports = { createProjectInJira, createTaskInJira };
