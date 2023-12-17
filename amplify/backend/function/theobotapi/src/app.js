/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_THEOBOTDOCS_GRAPHQLAPIIDOUTPUT
	API_THEOBOTDOCS_GRAPHQLAPIENDPOINTOUTPUT
	API_THEOBOTDOCS_GRAPHQLAPIKEYOUTPUT
	AUTH_THEOBOTDOCS048E7A79_USERPOOLID
	FUNCTION_S3TRIGGERD330DAF8_NAME
	STORAGE_THEOBOTFILES_BUCKETNAME
	API_THEOBOTDOCS_MOONTABLE_NAME
	API_THEOBOTDOCS_MOONTABLE_ARN
	API_THEOBOTDOCS_PROJECTROLETABLE_NAME
	API_THEOBOTDOCS_PROJECTROLETABLE_ARN
	API_THEOBOTDOCS_EVENTTABLE_NAME
	API_THEOBOTDOCS_EVENTTABLE_ARN
	API_THEOBOTDOCS_CHATTABLE_NAME
	API_THEOBOTDOCS_CHATTABLE_ARN
	API_THEOBOTDOCS_FILETABLE_NAME
	API_THEOBOTDOCS_FILETABLE_ARN
	API_THEOBOTDOCS_TASKTABLE_NAME
	API_THEOBOTDOCS_TASKTABLE_ARN
	API_THEOBOTDOCS_PROJECTTABLE_NAME
	API_THEOBOTDOCS_PROJECTTABLE_ARN
	API_THEOBOTDOCS_SATELLITETABLE_NAME
	API_THEOBOTDOCS_SATELLITETABLE_ARN
	API_THEOBOTDOCS_PLANETTABLE_NAME
	API_THEOBOTDOCS_PLANETTABLE_ARN
	API_THEOBOTDOCS_LOCATIONTABLE_NAME
	API_THEOBOTDOCS_LOCATIONTABLE_ARN
	API_THEOBOTDOCS_USERTABLE_NAME
	API_THEOBOTDOCS_USERTABLE_ARN
	JIRA_API
	PINECONE_API
Amplify Params - DO NOT EDIT */

const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// Import route handlers
const usersRoutes = require('./routes/users');
const eventsRoutes = require('./routes/events');
const projectsRoutes = require('./routes/projects');
const tasksRoutes = require('./routes/tasks');
const chatsRoutes = require('./routes/chats');
const moonsRoutes = require('./routes/moons');
const filesRoutes = require('./routes/files');
const planetsRoutes = require('./routes/planets');
const satellitesRoutes = require('./routes/satellites');

// Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Use route handlers
app.use('/users', usersRoutes);
app.use('/events', eventsRoutes);
app.use('/projects', projectsRoutes);
app.use('/tasks', tasksRoutes);
app.use('/chats', chatsRoutes);
app.use('/moons', moonsRoutes);
app.use('/files', filesRoutes);
app.use('/planets', planetsRoutes);
app.use('/satellites', satellitesRoutes);

app.listen(3000, function() {
    console.log("App started");
});

module.exports = app;
