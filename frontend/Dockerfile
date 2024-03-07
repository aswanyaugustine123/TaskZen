FROM node:20.11.1 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
ARG REACT_APP_BACKEND_URL

ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
