# Use build environment
FROM node:latest as build-env
WORKDIR /app

# Install git and openssh in build environment, required by some packages in npm install
RUN apt-get update && \
apt-get install -y git openssh-client

# Install npm packages. Done in a separate step to have node_modules cached by Docker
COPY package.json ./
COPY package-lock.json ./

RUN npm config set cache /mycache --global

RUN npm install

# Copy source code
COPY . ./

# Build the application
RUN chmod -R 777 ./
RUN npm run build

# Build runtime image
FROM node:latest

# Copy all files, including node_modules
WORKDIR /app
COPY --from=build-env /app /app

# Install npm in runtime environment
RUN apt-get update && \
apt-get install -y nginx

EXPOSE 8080

RUN chgrp -R 0 /var/www/html && chmod -R g=u /var/www/html
RUN chgrp -R 0 /var/log/nginx && chmod -R g=u /var/log/nginx
RUN mkdir /usr/share/nginx/logs
RUN chgrp -R 0 /usr/share/nginx/logs && chmod -R g=u /usr/share/nginx/logs
RUN chgrp -R 0 /var/lib/nginx && chmod -R g=u /var/lib/nginx

# Set run command to execute script
# The script will run npm build again, but using environment variables provided on runtime
RUN chown -R 1001:0 ./ && chmod -R ug+rwx ./
USER 1001

COPY nginx.conf /etc/nginx

CMD ["/bin/sh", "/app/docker_run.sh"]
