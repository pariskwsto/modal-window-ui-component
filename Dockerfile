FROM nginx:stable-alpine

COPY index.html /usr/share/nginx/html
COPY style.css /usr/share/nginx/html
COPY script.js /usr/share/nginx/html
COPY favicon.ico /usr/share/nginx/html

EXPOSE 3000