FROM node:12

WORKDIR /src

COPY package*.json ./

RUN npm install --save
RUN npm install knex -g

COPY . .

USER node

EXPOSE 3000

#CMD ["nodemon", "./bin/www"]
