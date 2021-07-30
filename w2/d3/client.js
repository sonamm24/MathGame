const { IP, PORT } = require("./constants");

const net = require('net');
const connection = function(){
  const conn = net.createConnection({ 
  host: '135.23.223.133', // change to IP address of computer or ngrok host if tunneling
  port: 50542 // or change to the ngrok port if tunneling
  });


  conn.setEncoding('utf8'); // interpret data as text
  conn.on('data', (data) => {
  console.log('Message from client: ', data)
  });
  conn.on('connect', () => {
  conn.write('Name: SM24');
  conn.write('Move: up');
  conn.write('Move: right');
  });


  return conn;
}
module.exports = connection;

