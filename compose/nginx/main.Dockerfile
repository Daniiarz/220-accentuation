FROM nginx:1.17.9-alpine

COPY ./conf/nginx/sites.conf /etc/nginx/conf.d/default.conf