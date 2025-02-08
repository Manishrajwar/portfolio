# Step 1: Use official Node.js image to build the React app
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use Nginx to serve the built app
FROM nginx:alpine

# Change Nginx default port to 8000
RUN sed -i 's/listen 80;/listen 8000;/' /etc/nginx/conf.d/default.conf

# Copy the built React app to Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8000
EXPOSE 8000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
