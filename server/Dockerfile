FROM node:lts-slim

WORKDIR /app

COPY tsconfig*.json ./
COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

CMD ["node", "dist/main.js"]