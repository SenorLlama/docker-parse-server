FROM node
MAINTAINER "Marvin Guerra (@SenorLlama)"

WORKDIR /app

ADD node/* /app/
RUN npm install

ADD entrypoint.sh /app/
RUN chmod a+x /app/entrypoint.sh

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927 && \
    echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.2 main" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list && \
    apt-get update && \
    apt-get install -y mongodb-org

EXPOSE 1337

CMD "./entrypoint.sh"
