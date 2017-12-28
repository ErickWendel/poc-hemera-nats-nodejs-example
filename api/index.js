const Hapi = require('hapi');
const app = new Hapi.Server();
const Hemera = require('nats-hemera');
const nats = require('nats').connect(process.env.NATS_URI);
const hemera = new Hemera(nats, { logLevel: 'info' });
let count = 0;
app.connection({ port: process.env.PORT });
app.route({
  path: '/',
  method: 'GET',
  handler: async (req, reply) => {
    count += 1;
    return await reply(sendMessage({ a: count, b: count + 2 }));
  },
});

function hemeraAct(params) {
  return new Promise((resolve, reject) => {
    hemera.act(params, (err, res) => (err ? reject(err) : resolve(res)));
  });
}
function sendMessage(params) {
  const action = {
    topic: 'math',
    cmd: 'add',
    ...params,
  };
  return hemeraAct(action);
}

app.start(() => console.log('running at', process.env.PORT));
