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
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DEVOP2</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f4f6f9;
            color: #333;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          .container {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            padding: 40px;
            max-width: 700px;
            width: 90%;
            text-align: center;
          }
          h1 {
            font-size: 2.2rem;
            margin-bottom: 0.5rem;
            color: #0f62fe;
          }
          p {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }
          ul {
            list-style-type: none;
            padding: 0;
            margin-top: 1rem;
            text-align: left;
          }
          li {
            margin-bottom: 0.6rem;
            padding-left: 1.2rem;
            position: relative;
          }
          li::before {
            content: "✔";
            position: absolute;
            left: 0;
            color: #0f62fe;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 Welcome To The Homepage For Our Devop Project</h1>
          <p>A modern platform for students to:</p>
          <ul>
            <li>Manage assignments and tasks</li>
            <li>Share and organize class notes</li>
            <li>Store and access lecture recordings</li>
          </ul>
        </div>
      </body>
    </html>
  `);
});



// Start the server using the port from config.js
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
