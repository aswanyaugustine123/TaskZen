FROM node:20.11.1 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]

FROM nginx:latest
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
