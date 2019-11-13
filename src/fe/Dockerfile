FROM node:lts-alpine as build-stage

WORKDIR /src

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

 CMD ["npm", "run", "dev"]
