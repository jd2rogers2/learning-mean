const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const images = require('./api/images');

const server = express();

server.set('views', path.join(__dirname, 'src'));
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

server.use(express.static(path.join(__dirname, 'src')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

server.get('/', (req, res) => {
  res.render('./src/index.html');
});
server.use('/api', images);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`server side server listening on port: ${port}`));
