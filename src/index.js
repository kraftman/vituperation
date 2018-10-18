'use strict';

const fastify = require('fastify')({
  logger: true,
});
const basic = require('./routes/basic.js');

fastify.register(basic)

const start = async () => {
  try {
    await fastify.listen(8080)
  } catch (err) {
    fastify.log.error(err)
    //process.exit(1)
  }
}

if (require.main === module) {
  start();
}

module.exports = { start, fastify }
