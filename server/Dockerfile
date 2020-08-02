FROM node:10.18.1-alpine3.11

# Create app directory
WORKDIR /usr/server

# NodeJS Config arguments
ARG PROD_DB_URI=
ARG PROD_JWT_SECRET=

COPY setNodeConfig.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

# Copy 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy server app code
COPY ./src ./src

# Copy configs
COPY ./config ./config

ENV PROD_DB_URI=$PROD_DB_URI
ENV PROD_JWT_SECRET=$PROD_JWT_SECRET

EXPOSE 5000

# Run production
CMD ["/bin/sh", "entrypoint.sh"]