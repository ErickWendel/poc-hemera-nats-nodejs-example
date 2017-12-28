const Hemera = require('nats-hemera');
const nats = require('nats').connect(process.env.NATS_URI);

const hemera = new Hemera(nats, { logLevel: 'info' });

console.log('sending message');
hemera.act(
  { topic: 'math', maxMessages$: 10, cmd: 'add', a: 5, b: 2 },
  (err, res) => {
    console.log('result', res);
  },
);
