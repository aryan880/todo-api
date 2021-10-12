const supertest = require('supertest');

function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

/* eslint-disable import/extensions */
before(async () => {
  global.expect = require('chai').expect;
  global.assert = require('chai').assert;

  const app = require('../app.js');

  await delay(2 * 1000);
  global.request = supertest(app);
});

after(async () => {
  console.log('finish');
  // timeout for istanbul & nyc
  await delay(2 * 1000);
  process.exit(0);
});
