FROM node:10.18.1-alpine3.11

# Create app directory
WORKDIR /usr/src/app

# Copy 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy server app code
COPY . .

EXPOSE 5000

# Run development script
CMD [ "node", "server.js" ]