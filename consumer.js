const amqp_consumer = require('amqplib')
amqp_consumer.connect('amqp://localhost').then(conn=> {
  return conn.createChannel().then(ch => {})
})

conn.createChannel().then(ch => {
    const ok = ch.assertQueue('nama_channel', { durable: false })
    ok.then(() => {
      return ch.consume('nama_channel', msg => console.log('- Received', msg.content.toString()), { noAck: true })
    })
})