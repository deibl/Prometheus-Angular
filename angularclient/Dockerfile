FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /app/default.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist/* /usr/share/nginx/html/
