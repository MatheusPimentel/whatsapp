FROM node:lts-alpine as global-lts-alpine
RUN npm i --location=global @quasar/cli@latestvue
RUN npm install -g @vue/cli
RUN npm install -g @vue/cli-service
RUN npm install --save-dev jest

FROM global-lts-alpine as develop-stage
WORKDIR /src
COPY package*.json ./
COPY . .

FROM develop-stage as local-stage
RUN npm install

FROM local-stage as build-stage
RUN quasar build -m spa

FROM nginx:stable-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /src/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

