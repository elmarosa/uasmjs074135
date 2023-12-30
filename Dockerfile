FROM node:14-alpine

WORKDIR /home/abu/uasmjs074135

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]