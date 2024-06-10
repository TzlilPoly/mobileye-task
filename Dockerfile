FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173
EXPOSE 3000

CMD ["npm","run","dev"]