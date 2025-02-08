# Use Node.js image to build React app
FROM node:16 AS build

# Set working directory and copy package files
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

EXPOSE 8000

CMD ["npm", "run", "start"]
