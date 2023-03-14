FROM node:14

WORKDIR /app

COPY package*.json .

RUN npm install && npm install typescript --save-dev

COPY . .

RUN npm run build

CMD [ "node", "start" ]