FROM node:14

WORKDIR /app

COPY /app/package.json .

RUN npm install

COPY /app .

EXPOSE 4052

CMD [ "npm", "start" ]