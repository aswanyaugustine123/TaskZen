
FROM node:20.11.1 AS build-stage
WORKDIR /app

COPY frontend/package*.json /app/
RUN npm install

COPY frontend/ /app/
RUN npm run build

FROM node:20.11.1 AS production-stage

WORKDIR /usr/src/app

COPY --from=build-stage /app/build /usr/src/app/frontend/build

COPY taskzen-backend/package*.json /usr/src/app/
RUN npm install

COPY taskzen-backend/ /usr/src/app/

EXPOSE 3000

CMD ["node", "server.js"]
