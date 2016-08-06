FROM node:slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY lib /usr/src/app/lib
COPY views /usr/src/app/views
COPY package.json /usr/src/app/package.json
COPY index.js /usr/src/app/index.js

RUN npm install

EXPOSE 8585

CMD [ "npm", "start" ]
