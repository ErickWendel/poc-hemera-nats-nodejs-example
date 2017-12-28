FROM node:8

# RUN mkdir -p service1

ADD package.json service1/package.json

WORKDIR service1

RUN npm install

RUN npm install -g nodemon

RUN cd ..

ADD . service1


CMD [ "npm", "start" ]