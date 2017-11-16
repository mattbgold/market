import {join} from 'path';
import {createServer} from 'http';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import *  as ioFactory from 'socket.io';

// Initialize App
const app = express();

let server = createServer(app);

// Create singletons
let IO = ioFactory(server);

// Init config for routes
const APP_CONFIG = {
  port: process.env.NODE_PORT || 3000,
  IO
};

app.use(bodyParser.json({limit: '100mb'}));

/*-------- API --------*/
app.use('/api', require('./routes/api')(APP_CONFIG));

/*------- Angular client on Root ------- */
app.set('view engine', 'html');
app.use(express.static(join(__dirname, '../client')));
app.get('/*', function(req, res){
  return res.sendFile(join(__dirname, '../client/index.html'));
});

app.all('*', function(req, res){
  return res.status(404).send('404 UNKNOWN ROUTE');
});

server.listen(APP_CONFIG.port);
console.log('App started on port', APP_CONFIG.port);
