FROM node:8

ADD package.json service2/package.json

WORKDIR service2

RUN npm install

RUN npm install -g nodemon

RUN cd ..

ADD . service2


CMD [ "npm", "start" ]