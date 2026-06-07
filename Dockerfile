# Etapa 1: build
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Etapa 2: servidor web
FROM nginx:alpine

COPY --from=build /app/dist/ /usr/share/nginx/html

# Angular routing fix
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
