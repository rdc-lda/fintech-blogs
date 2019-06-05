FROM node as build-stage
WORKDIR /static-build
RUN yarn global add vuepress
COPY docs/ docs/
COPY package.json .
RUN yarn docs:build

FROM nginx:stable

# Support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx \
   /var/run /var/log/nginx \
   /usr/share/nginx/html \
   /etc/nginx/conf.d

COPY --from=build-stage /static-build/dist /usr/share/nginx/html

# Copy the Nginx CBX WebApp configration
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf_inactive
COPY fintech-blog-nginx.conf /etc/nginx/conf.d/fintech-blog-nginx.conf