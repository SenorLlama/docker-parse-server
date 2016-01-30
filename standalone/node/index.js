// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var http = require('http');
var databaseUri ='mongodb://';

if (!process.env.DATABASE_HOST) {
  console.log('DATABASE_HOST not specified, falling back to localhost.');
  databaseUri += 'localhost';
} else {
  databaseUri += process.env.DATABASE_HOST;
}
databaseUri += ':';
if (!process.env.DATABASE_PORT) {
  console.log('DATABASE_PORT not specified, falling back to 27017');
  databaseUri += '27017';
} else {
  databaseUri += process.env.DATABASE_PORT;
}
databaseUri += '/dev';

var api = new ParseServer({
  databaseURI: databaseUri,
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud.js',
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY || 'myMasterKey'
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a web site.');
});

var port = 1337;
var httpServer = http.createServer(app);
httpServer.listen(port, function() {
  console.log('parse-server-example running on port ' + port + '.');
});
