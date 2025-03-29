/*
This file is the main entry point for the Express backend. It initializes the Express server, configures middleware (like CORS and body-parser for JSON payloads), and sets up the base routing by importing routes from the routes directory. It uses configuration values from config.js and starts listening on the defined port, logging a confirmation message. This file orchestrates how your backend application boots up and serves API requests.
*/


// Entry point for the Express backend application
// Required modules: express, cors, body-parser
// Install with: npm install express cors body-parser
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import configuration directly from config.js
const config = require('./config/config');

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Import routes (create tasks.js as shown below)
const tasksRoutes = require('./routes/tasks');
app.use('/api/tasks', tasksRoutes);

// Start the server using the port from config.js
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
