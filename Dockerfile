### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8-alpine as builder
WORKDIR /app
RUN npm config set user 0
RUN npm config set unsafe-perm true
RUN npm config set registry http://registry.npm.taobao.org/

COPY . /app
RUN npm install
RUN npm run build


FROM nginx:1.13.3-alpine


RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]