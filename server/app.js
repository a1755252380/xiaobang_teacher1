const express = require('express');
const exec = require('child_process').exec;
const app = express();

const net = require('net');
const socket = new net.Socket();
const port = 21156;

const hostname = '10.10.226.11';

socket.setEncoding = 'UTF-8';

var isOk = false
var data = ''
app.get('/go', (req, res) => {
  socket.connect(port, hostname, function () {
    console.log('调用后端');
    socket.write('开始录制');
  })
})


socket.on('data', msg => {

  data = msg.toString()
  if (data) {
    isOk = true
    console.log('后端已处理完成');
    console.log(data);
  }

});

socket.on('error', function (error) {
  console.log('error' + error);
});

socket.on('close', function () {
  console.log('服务器端下线了');
});

app.listen("3000", function () {
  console.log("服务器请求成功");
})
// 跨域
//设置跨域请求
app.all('*', function (req, res, next) {
  //设置请求头
  //允许所有来源访问
  res.header('Access-Control-Allow-Origin', '*')
  //用于判断request来自ajax还是传统请求
  res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept");
  //允许访问的方式
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  //修改程序信息与版本
  res.header('X-Powered-By', ' 3.2.1')
  //内容类型：如果是post请求必须指定这个属性
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})


// 接受请求方法和地址
app.get('/', (req, res) => {
  var data1 = {
    isOk,
    data: data
  }
  res.json(data1)
  isOk = false
})






