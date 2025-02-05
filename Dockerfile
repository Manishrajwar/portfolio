# Step 1: Use official Node.js image to build the React app
FROM node:16 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if exists)
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the React app's code
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Use Nginx to serve the built app
FROM nginx:alpine

# Step 8: Copy the build folder from the previous step
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port that Nginx is running on
EXPOSE 80

# Step 10: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
