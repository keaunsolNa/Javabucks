FROM node:10


RUN npm install 

CMD ["node", "server.js"]