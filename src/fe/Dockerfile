FROM node:12

WORKDIR /src

COPY package.json ./

RUN npm install nodemon -g
RUN npm install --save

COPY . .

EXPOSE 3001

CMD ["npm", "run", "serve"]
