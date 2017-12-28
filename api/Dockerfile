FROM node:8

ADD package.json api/package.json

WORKDIR api

RUN npm install

RUN npm install -g nodemon

RUN cd ..

ADD . api


CMD [ "npm", "start" ]