#------------------------------------------------------
#               Dashboard build begin
#------------------------------------------------------
# build environment
FROM node:carbon-alpine as builder

RUN mkdir -p /usr/src/dashboard
WORKDIR /usr/src/dashboard

# Install all dependencies of the current project.
COPY ./dashboard/package.json package.json
COPY ./dashboard/yarn.lock yarn.lock
RUN yarn install

# Copy all local files into the image.
COPY ./dashboard .

# Build for production.
RUN yarn run build --production

#------------------------------------------------------
#                   Package
#------------------------------------------------------

FROM andangquoc/node-9-sails-1:base

WORKDIR /usr/app

COPY ./server/package.json .
COPY ./server/yarn.lock .
COPY ./server/package-lock.json .

RUN yarn install --production

COPY ./server .

RUN mkdir ./assets/dashboard

COPY --from=builder /usr/src/dashboard/build ./assets/dashboard