FROM node:6.11.3-alpine

ENV APP_HOME /myapp/client
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

RUN apk update && apk add \
  g++ \
  git \
  make \
  python

RUN npm install
EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]
