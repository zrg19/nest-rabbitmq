# Base Image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the source code
COPY . ./

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose the application start
EXPOSE 3000

# Run the application
CMD [ "npm", "run", "start:prod"]
