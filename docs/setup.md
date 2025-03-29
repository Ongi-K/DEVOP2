<!--
This document provides a detailed setup guide for the project, covering both backend and frontend development environments. It includes instructions on installing necessary tools (like Node.js and npm), running development servers, and troubleshooting common issues. This guide ensures that all contributors can easily configure their local environments and understand the project dependencies.
-->
# Detailed Setup Guide

## Backend
- Install Node.js (v16 or above).
- In the `backend/` directory, run `npm install`.
- The configuration is hardcoded in `src/config/config.js`.
- Run `npm start` to launch the server.

## Frontend (Vue)
- Ensure Node.js and npm are installed.
- In the `frontend/` directory, run `npm install`.
- Run `npm run serve` to start the Vue development server.
- Tailwind CSS is configured; modify `tailwind.config.js` if necessary.

## Docker (Backend)
- Build the Docker image with:
  `docker build -t student-task-notes-backend .`
  (Run from the `backend/` directory.)
- Run the container with:
  `docker run -p 3000:3000 student-task-notes-backend`
