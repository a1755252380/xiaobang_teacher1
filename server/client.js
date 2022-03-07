const net = require('net');
const socket = new net.Socket();
const port = 21156;

const hostname = '10.10.226.11';

socket.setEncoding = 'UTF-8';

var isOk = false
var data = []



socket.connect(port, hostname, function () {
  socket.write(key);
});

socket.on('data', msg =>{
  isOk = true
  data = msg
  console.log(msg.toString());
});

socket.on('error', function (error) {
  console.log('error' + error);
});

socket.on('close', function () {
  console.log('服务器端下线了');
});
