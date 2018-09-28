const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const images = require('./routes/images');
const index = require('./routes/index');

const server = express();

server.set('views', path.join(__dirname, 'src'));
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(express.static(path.join(__dirname, 'src')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/', index);
server.use('/api', images);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`server side server listening on port: ${port}`));
