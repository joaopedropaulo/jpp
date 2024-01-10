FROM node:lts-slim

WORKDIR /usr/server

COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./config ./config

EXPOSE 5000

CMD ["npm", "run", "start"]