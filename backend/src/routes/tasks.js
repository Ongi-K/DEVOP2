/*
This file defines the API endpoints for handling tasks and notes. Using Express, it sets up routes for various HTTP methods (GET, POST, etc.) and delegates the business logic to the corresponding functions in the tasksController. This separation of concerns makes the code easier to manage and extend in the future.
*/

// Sets up API endpoints for tasks/notes and authentication.
// Required module: express (npm install express)
const express = require('express');
const router = express.Router();

// Import controller containing business logic for tasks/notes
const tasksController = require('../controllers/tasksController');

// GET endpoint to retrieve all tasks
router.get('/', tasksController.getAllTasks);

// POST endpoint to create a new task
router.post('/', tasksController.createTask);

// Additional endpoints (PUT, DELETE) can be added here

module.exports = router;
