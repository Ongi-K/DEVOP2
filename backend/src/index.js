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

// Add a root route to respond to GET requests at "/"
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>DEVOP2</title>
        <style>
          body {
            background-color: lightblue;
            font-family: sans-serif;
            margin: 0;
            padding: 20px;
          }
          h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          p {
            font-size: 1.2rem;
            line-height: 1.4;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to the DEVOP2 API!</h1>
        <p>This project is a web-based platform for students to manage assignments, share notes, and store lecture recordings.</p>
      </body>
    </html>
  `);
});



// Start the server using the port from config.js
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
