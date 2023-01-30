FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY . .

COPY --chown=node:node . .

RUN chmod 777 -R /app

USER node

ENV PORT=3333

EXPOSE $PORT

RUN npm install --force

RUN npm run build

ENTRYPOINT ["node", "dist/server.js"]