FROM node:10.18.1-alpine3.11

# Create app directory
WORKDIR /usr/server

# NodeJS Config arguments
ARG PROD_DB_URI=
ARG PROD_JWT_SECRET=

COPY setNodeConfig.sh ./
RUN chmod +x setNodeConfig.sh && ./setNodeConfig.sh $PROD_DB_URI $PROD_JWT_SECRET

# Copy 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy server app code
COPY ./src ./src

# Copy configs
COPY ./config ./config

EXPOSE 5000

# Run production
CMD [ "npm", "run", "start" ]