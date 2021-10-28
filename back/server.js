const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const mysql = require('mysql')
const axios = require('axios')
// const session = require('express-session')
// const cookieParser = require('cookie-parser')
const socket = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const io = socket(server)

const PORT = '4000'
const {sequelize, Auction} = require('./models')
const router = require('./routers/index')

// app.use(cookieParser())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
})

// app.use(session({
//     secret: 'aaa',
//     resave: false,
//     saveUninitialized: true,
// }))

sequelize.sync({ force: false, })
    .then(() => {
        console.log('access successful')
    }).catch(() => {
        console.log('access failed')
    })

app.use('/',router)
server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})

io.sockets.on('connection',socket=>{
    console.log('connected')

})