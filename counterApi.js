const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const cors = require('cors');
const Counters = require('./lib/Counter');

const counterApp = express();
const port = process.env.PORT || 4000;

counterApp.use(morgan('combined'));
counterApp.use(bodyParser.urlencoded({ extended: false }));
counterApp.use(bodyParser.json());
counterApp.use(compression());
counterApp.use(cors());


// [json] GET /api/v1/counters
// => [
// =>   {id: 'asdf', title: 'boop',  count: 4},
// =>   {id: 'zxcv', title: 'steve', count: 3}
// => ]
counterApp.get('/api/v1/counters', (req, res) => {
  res.json(Counters.all());
});

// [json] POST {title: 'bob'} /api/v1/counters
// => [
// =>   {id: 'asdf', title: 'boop',  count: 4},
// =>   {id: 'zxcv', title: 'steve', count: 3},
// =>   {id: 'qwer', title: 'bob',   count: 0}
// => ]
counterApp.post('/api/v1/counter', (req, res) => {
  res.json(Counters.create(req.body.title));
});

// [json] DELETE {id: 'asdf'} /api/v1/counter
// => [
// =>   {id: 'zxcv', title: 'steve', count: 3},
// =>   {id: 'qwer', title: 'bob',   count: 0}
// => ]
counterApp.delete('/api/v1/counter1', (req, res) => {
  res.json(Counters.delete(req.body.id));
});

// [json] POST {id: 'qwer'} /api/v1/counter/inc
// => [
// =>   {id: 'zxcv', title: 'steve', count: 3},
// =>   {id: 'qwer', title: 'bob',   count: 1}
// => ]
counterApp.post('/api/v1/counter/inc', (req, res) => {
  res.json(Counters.inc(req.body.id));
});

// [json] POST {id: 'zxcv'} /api/v1/counter/dec
// => [
// =>   {id: 'zxcv', title: 'steve', count: 2},
// =>   {id: 'qwer', title: 'bob',   count: 1}
// => ]
counterApp.post('/api/v1/counter/dec', (req, res) => {
  res.json(Counters.dec(req.body.id));
});

counterApp.listen(port, console.log.bind(null, `PORT: ${port}`));
