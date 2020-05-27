FROM node:12
WORKDIR /usr/src/clean-node-api
COPY ./package.json .
RUN nmp install --only=prod
COPY ./dist ./dist
EXPOSE 5000
RUN npm start
