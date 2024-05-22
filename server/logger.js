const winston = require('winston');
const { LogstashTransport } = require('winston-logstash-transport');

const logger = winston.createLogger({
  transports: [
    new LogstashTransport({
      port: process.env.LOGSTASH_PORT || 5000,
      host: process.env.LOGSTASH_HOST || 'localhost',
      node_name: 'my-node-app', // Name of your application
      max_connect_retries: -1,
    })
  ]
});

module.exports = logger;