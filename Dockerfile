FROM node:6.5-slim

RUN npm install yakbak@~2.5.0

CMD node /server.js
