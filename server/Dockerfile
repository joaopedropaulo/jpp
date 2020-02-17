FROM node:10.18.1-alpine3.11

# Create app directory
WORKDIR /usr/server

# Copy 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy server app code
COPY ./src ./src

EXPOSE 5000

# Run development script
CMD [ "npm", "run", "server" ]