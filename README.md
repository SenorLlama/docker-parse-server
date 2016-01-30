# docker-parse-server
Simple docker image for Parse-Server

## Usage
```
docker run -d -p 27017:27017 --name mongo mongo
docker run -d --link mongo -e DATABASE_HOST=mongo -e DATABASE_PORT=27017 -e APP_ID={appId} -e MASTER_KEY={masterKey} -e PARSE_MOUNT={parseMount} -p 1337:1337 senorllama/parse-server
 ```

Parse API: $DOCKER_HOST_IP:1337/parse
mongodb: $DOCKER_HOST_IP::27017

There is also a version with an embedded mongodb, if you want to just get a quick container up and running and don't need to do extra configuration for mongo.
```
docker run -d -e APP_ID={appId} -e MASTER_KEY={masterKey} -e PARSE_MOUNT={parseMount} -p 1337:1337 senorllama/parse-server:mongo
```

Parse API: $DOCKER_HOST_IP:1337/parse
mongodb: $DOCKER_HOST_IP::27017

If you also want to provide your own ```cloud.js``` file for custom functions, start the container with the path you will place your ```cloud.js``` file:
```
docker run -d -e CLOUD_CODE_MAIN={containerPath} -e APP_ID={appId} -e MASTER_KEY={masterKey} -e PARSE_MOUNT={parseMount} -p 1337:1337 senorllama/parse-server:mongo
```
and use the ```docker cp``` command to copy a file into the container:
```
docker cp [OPTIONS] {localPath} {containerId}:{containerPath}
```
