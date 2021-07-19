const amqp_producer = require('amqplib');
var conn = null;
amqp_producer.connect('amqp://localhost').then(conn => conn.createChannel())

conn.createChannel().then(ch => {
    const q = 'nama_channel'
    const msg = 'Hello world Tes 1!'
    const ok = ch.assertQueue(q, { durable: false })
    ok.then(() => {
      ch.sendToQueue(q, Buffer.from(msg))
      console.log('- Sent', msg)
      return ch.close()
    })
  })