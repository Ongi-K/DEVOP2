# This Dockerfile contains instructions for containerizing the Node.js backend application.
# It starts from a Node.js base image, installs dependencies, copies the source code, exposes the designated port, and defines the command to run the server.

# Dockerfile for containerizing the backend
FROM node:16

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port defined in the environment
EXPOSE 3000

# Define the command to run the app
CMD [ "node", "src/index.js" ]
