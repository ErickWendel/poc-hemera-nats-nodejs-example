const Hemera = require('nats-hemera');
const nats = require('nats').connect(process.env.NATS_URI);

const hemera = new Hemera(nats, { logLevel: 'info' });

hemera.add({ topic: 'math', cmd: 'add' }, async (resp, cb) => {
  console.log('receiving message', resp);
  return cb(null, resp.a + resp.b);
});
