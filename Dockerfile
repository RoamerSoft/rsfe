#   ____                                 ____         __ _
#  |  _ \ ___   __ _ _ __ ___   ___ _ __/ ___|  ___  / _| |_
#  | |_) / _ \ / _` | '_ ` _ \ / _ \ '__\___ \ / _ \| |_| __|
#  |  _ < (_) | (_| | | | | | |  __/ |   ___) | (_) |  _| |_
#  |_| \_\___/ \__,_|_| |_| |_|\___|_|  |____/ \___/|_|  \__|
#  ---------------------------------------------------------------
#  Frontend App - Server Side Rendered - Docker Multi-Stage Build
#  ---------------------------------------------------------------

# Stage 1: Build an Angular Docker Image
FROM node:alpine as build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Build SSR app
RUN npm run build:ssr
#  ---------------------------------------------------------------

# Stage 2: Use only the compiled app for production
FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Copy only the needed files from the build
COPY --from=build /usr/src/app/dist dist/

# Start server
CMD [ "node", "dist/server" ]
