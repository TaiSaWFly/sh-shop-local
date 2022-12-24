FROM node:14 as sh-shop-project

WORKDIR /app/sh-shop-project

COPY sh-shop-project/package.json /app/sh-shop-project

RUN npm install

COPY sh-shop-project /app/sh-shop-project

RUN npm run build



FROM node:14

WORKDIR /app

COPY sh-shop-server/package.json /app

RUN npm install

COPY sh-shop-server /app

COPY --from=sh-shop-project /app/sh-shop-project/build /app/sh-shop-project

EXPOSE 8080

CMD [ "npm", "start" ]