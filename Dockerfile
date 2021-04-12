FROM node:14

WORKDIR /app

COPY /package.json .

RUN npm install

COPY . .

EXPOSE 4052

CMD [ "npm", "start" ]