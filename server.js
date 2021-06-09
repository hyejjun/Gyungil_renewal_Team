const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const router = require('./routers');

const app = express();

app.set('view engine', 'html')
nunjucks.configure('views',{
    express: app
})

app.use(express.static('static'))

app.use(bodyParser.urlencoded({extended: true}))

app.use('/',router)

app.listen(3000,()=>{
    console.log('server start port 3000')
})
