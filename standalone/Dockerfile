FROM node
MAINTAINER "Marvin Guerra (@SenorLlama)"

WORKDIR /app

ADD node/* /app/
RUN npm install

ADD entrypoint.sh /app/
RUN chmod a+x /app/entrypoint.sh

EXPOSE 1337

CMD "./entrypoint.sh"
