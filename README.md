
# ts-express-boilerplate

## Backend Project with TypeScript, Express.js, Node.js, and Docker

A simple and scalable backend application built using **TypeScript**, **Express.js**, **Node.js**, and **Docker**. This project serves as a template to help developers get started with building APIs. It integrates MongoDB for data persistence and includes basic error handling. The project is designed to be easily extendable and customizable.

## Features

- **TypeScript** for type safety and enhanced developer experience.
- **Express.js** for building a RESTful API.
- **MongoDB** integration for data storage.
- **Docker** support for easy containerization and deployment.
- **CORS** support for cross-origin requests.
- **Basic error handling middleware** for consistent error responses.
- **Structured codebase** with separate files for routes, services, and utilities.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Docker Setup](#docker-setup)
5. [API Endpoints](#api-endpoints)
6. [Running Locally](#running-locally)
7. [Contribution](#contribution)
8. [License](#license)

---

## Getting Started

This project serves as a starting point for building backend applications using **Express.js** and **TypeScript**. It includes essential features like MongoDB integration and middleware for error handling. Here's how to get started:

### Prerequisites

- **Node.js** (>= v18)
- **Docker** (optional, for containerized setup)
- **MongoDB** (can use Docker to set up a local instance if needed)

## Project Structure

The project is structured as follows:

```
├── src
│   ├── config           # MongoDB connection and other config files
│   ├── controllers      # Request handlers
│   ├── routes           # API routes
│   ├── services         # Business logic
│   ├── utils            # Utility functions and helpers
│   ├── middlewares      # Error handling, CORS, etc.
│   ├── types            # Types for related data
│   └── app.ts           # Express app setup and initialization
├── Dockerfile           # Dockerfile for containerization
├── .dockerignore        # Files to ignore in Docker build
├── .env                 # Environment variables for local setup
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SivaprasadAre/ts-express-boilerplate.git
cd ts-express-boilerplate
```

### 2. Install Dependencies

Install all the required dependencies using npm or yarn:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project to store environment variables like database URI, port, etc.

Example `.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/your-db-name
```

## Docker Setup

### 1. Build Docker Image

To build the Docker image, use the following command:

```bash
docker build -t ts-express-boilerplate .
```

### 2. Run Docker Container

After building the Docker image, you can run the container using:

```bash
docker run -p 5000:5000 --env-file .env ts-express-boilerplate
```

This will start the app and bind port 5000 on your local machine to the container's port.

---

## API Endpoints

Here are some of the basic endpoints that you can use in this application:

### GET `/v1/products`

Fetch a list of all products.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Product A",
    "price": 100,
    "description": "Product A",
    "category": "Category A"
  },
  {
    "id": 2,
    "name": "Product B",
    "price": 150,
    "description": "Product B",
    "category": "Category B"
  }
]
```

### POST `/v1/products`

Create a new product.

**Request Body:**
```json
{
  "name": "Product C",
  "price": 200,
  "description": "Product C",
  "category": "Category C"
}
```

**Response:**
```json
{
  "id": 3,
  "name": "Product C",
  "price": 200,
  "description": "Product C",
  "category": "Category C"
}
```

---

## Running Locally

You can run the app locally using **npm** or **Docker**.

### 1. Run with npm (or yarn)

```bash
# Run in development mode (watch mode)
npm run dev

# Run in build mode
npm run build

# Run in production mode
npm run start
```

This will start the Express.js server on `http://localhost:5000` by default.

### 2. Run with Docker

If you prefer to run the application in a containerized environment, follow the steps in the **Docker Setup** section to build and run the app in Docker.

---

## Contribution

We welcome contributions to improve this project! Here’s how you can get started:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and write tests if necessary.
4. Submit a pull request with a description of your changes.

Before contributing, please make sure to follow the coding conventions and write tests where applicable.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
