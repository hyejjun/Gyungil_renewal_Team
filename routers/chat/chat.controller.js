const express = require('express');
const app = express();
const socket = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socket(server);


let get_clientInfo = (req, res) => {
  res.render(`./chat/clientInfo.html`, {
  })
}

let start_consult = (req, res) => {
  console.log('aaa')
  res.render(`./chat/chat.html`, {
  })
}

let get_message = async (req, res) => {


}



//소켓 서버에서 받는 부분. 
let id = undefined;
io.sockets.on("connection", socket => {
  // console.log(socket.handshake.headers.cookie);

  let cookieStr = socket.handshake.headers.cookie;
  if (cookieStr !== undefined) {
    let cookieArr = cookieStr.split(';');
    cookieArr.forEach(v => {
      let [name, value] = v.split('=');
      //trim은 공백을 제거하는 메서드.. 
      //replace 교체
      if (name == 'AccessToken') {
        let jwt = value.split('.');
        //console.log(jwt[1]); 
        let payload = Buffer.from(jwt[1], 'base64').toString()
        let { userid } = JSON.parse(payload);
        id = userid;
      }
    })
  }

  console.log(id);
  socket.on('send', datas => {
    console.log(datas);
    socket.broadcast.emit('msg', datas)
  })
})

module.exports = {
  get_message, get_clientInfo, start_consult
}