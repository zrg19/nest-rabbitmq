# NestJS RabbitMQ
This project demonstrates how to build an Enterprise Service Bus (ESB) architecture using NestJS and RabbitMQ with Docker. The application includes components for message production, consumption, routing, and transformation, all integrated into a NestJS environment.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Setting Up RabbitMQ with Docker](#setting-up-rabbitmq-with-docker)
  - [Build and Run the NestJS Application](#build-and-run-the-nestjs-application)
  - [Accessing the Application](#accessing-the-application)
- [Usage](#usage)
- [Monitoring](#monitoring)
- [Summary](#summary)
## Features
- Message Queues: RabbitMQ configured with Docker.
- Producers & Consumers: Message producers and consumers implemented using NestJS.
- Message Routing & Transformation: Business logic for routing and transforming messages.
- Docker Integration: Full Docker support for RabbitMQ and NestJS.
## Technologies Used
- Node.js 18.x
- NestJS (latest version)
- RabbitMQ
- Docker
- Docker Compose
## Prerequisites
  Before you begin, ensure you have the following installed on your local machine:

- Node.js 18.x or higher
- npm or Yarn
- Docker and Docker Compose
## Getting Started
### Clone the Repository
Start by cloning this repository to your local machine:

```bash
git clone https://github.com/zrg19/nest-rabbitmq.git
cd nest-rabbitmq
```

### Setting Up RabbitMQ with Docker
RabbitMQ is configured to run in a Docker container. Follow these steps to get RabbitMQ up and running:

Create and start the RabbitMQ Docker container:

```bash
docker-compose up -d rabbitmq
```

This will start RabbitMQ with the management UI accessible at http://localhost:15672. The default username and password are guest/guest.

### Build and Run the NestJS Application
#### Install dependencies:
```bash
npm install
# or
yarn install
```

### Build the Docker image with Dockerfile:
```bash
docker build -t nestjs-esb:latest .
```

### Run the application inside a Docker container:
```bash
docker-compose up -d --build
```

This will start the NestJS application along with RabbitMQ in Docker containers.

### Run the application locally without Docker:
If you want to run the NestJS application locally without Docker, use:

```bash
npm run start
# or
yarn start
```

### Accessing the Application
- **NestJS Application:** http://localhost:3000
- **RabbitMQ Management UI:** http://localhost:15672 (Username: guest, Password: guest)

## Usage
### Send a Message:
You can send a message to the system using a REST API endpoint or directly from the code.

### Receive and Process Messages:
Messages will be consumed from the respective RabbitMQ queues and processed by the consumers defined in the application.

## Monitoring
NestJS provides built-in support for monitoring and logging. You can extend this with additional tools like Prometheus, Grafana, or NestJS's built-in modules.

## Summary
- **Clone the Repository:** Explains how to clone the repository from GitHub.
- **Setting Up RabbitMQ with Docker:** Provides commands to start RabbitMQ using Docker.
- **Build and Run the NestJS Application:** Covers building the application using npm or Yarn and running it locally or in a Docker container.
- **Accessing the Application:** Specifies how to access the NestJS application and RabbitMQ management UI.
- **Usage and Monitoring:** Details on sending and receiving messages and monitoring the application.