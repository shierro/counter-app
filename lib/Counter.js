const _ = require('lodash');
const uuidv4 = require('uuid/v4');

const InternalCounters = {};

module.exports = {
  all: getAll,
  create,
  inc: applyTo('count', inc),
  dec: applyTo('count', dec),
  delete: del,
};

function genId() {
  return uuidv4();
}

function getAll() { return _.map(InternalCounters, _.identity); }

function create(title) {
  const id = genId();
  InternalCounters[id] = { id, title, count: 0 };
  return getAll();
}

function del(id) {
  delete InternalCounters[id];
  return getAll();
}

function applyTo(key, fn) {
  return (id) => {
    InternalCounters[id][key] = fn(InternalCounters[id][key]);
    return getAll();
  };
}

function inc(n) { return n + 1; }
function dec(n) { return n - 1; }
