# Use the official Node.js image
FROM node:23.8.0-alpine

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy .env file into the container
COPY .env .env

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 8000

# Start the application using nodemon for hot reloading during development
CMD ["npm", "run", "dev"]
