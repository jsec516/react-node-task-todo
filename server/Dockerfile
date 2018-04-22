FROM node:6.11.3-alpine

ENV APP_HOME /myapp/server
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

RUN apk update && apk add \
  g++ \
  git \
  make \
  python

RUN npm install
RUN node job-scripts/seeder.js
EXPOSE 8080

ENTRYPOINT ["npm"]
CMD ["start"]
