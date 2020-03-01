FROM node:10.18.1-alpine3.11

# Create app directory
WORKDIR /usr/client

# Copy 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy client app code
COPY ./src ./src

# Copy static files
COPY ./public ./public

EXPOSE 3000

# Run development script
CMD [ "npm", "start" ]