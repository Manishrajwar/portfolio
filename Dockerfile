# Use Node.js image to build React app
FROM node:16 AS build

# Set working directory and copy package files
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . /app

# Expose port 3000 for dev server
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]
