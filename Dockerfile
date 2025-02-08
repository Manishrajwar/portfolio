# Use Node.js image to build React app
FROM node:16 AS build

# Set working directory and copy package files
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy app source code and build it
COPY . . 
RUN npm run build

# Use Nginx to serve the built app
FROM nginx:alpine

# Change Nginx port to 8000
RUN sed -i 's/listen 80;/listen 8000;/' /etc/nginx/conf.d/default.conf

# Copy built app to Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8000
EXPOSE 8000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
