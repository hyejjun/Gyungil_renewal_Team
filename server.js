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

// //addEventListener('',)
// io.sockets.on('connection', (socket) => {
//     socket.on('send', (data) => {
//         socket.broadcast.emit('call', data.msg)
//     })
// })




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


// 소켓 
io.sockets.on("connection", socket => {
    socket.on('test', datas => {
        let id = datas[0];
        io.sockets.to(id).emit('test', datas);
    })

    // socket.on('end', datas => {
    //     console.log('cccccccccccccccccccccccccc')
    // })
})

server.listen(PORT, () => {
    console.log(`server start port ${PORT}`)
})



