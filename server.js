require('dotenv').config()
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const router = require('./routers');
const PORT = 3000;
const errorController = require("./routers/errorController");
const { sequelize } = require('./models/index')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const axios = require('axios');
const qs = require('qs');

const socket = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socket(server);

//addEventListener('',)
io.sockets.on('connection', (socket) => {
    socket.on('send', (data) => {
        console.log(`클라이언트에서 받은 메세지는 데이터 ${data.msg}`);
        socket.broadcast.emit('call', data.msg)
    })
})




app.use(session({
    secret: 'aaa',
    resave: false,
    secure: false,
    saveUninitialized: false,
}))

app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app
})

app.use('/uploads', express.static('uploads'));
app.use(express.static('uploads/'));
app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



sequelize.sync({ force: false, })
    .then(() => {
        console.log('접속 성공');
    })
    .catch((e) => {
        console.log(e);
        console.log('접속 실패');
    })


app.use('/', router)

app.use(errorController.pageNotFoundError);
app.use(errorController.respondInternalError);


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

server.listen(PORT, () => {
    console.log(`server start port ${PORT}`)
})
