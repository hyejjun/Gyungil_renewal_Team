require('dotenv').config()
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const router = require('./routers');
const PORT = 3000;
const errorController = require("./routers/errorController");
const {sequelize} = require('./models/index')
const cookieParser = require('cookie-parser');


const app = express();

app.set('view engine', 'html')
nunjucks.configure('views',{
    express: app
})

app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


sequelize.sync({ force : false, })
.then(()=>{
    console.log('접속 성공');
})
.catch((e)=>{
    console.log(e);
    console.log('접속 실패');
})


app.use('/',router)

app.use(errorController.pageNotFoundError);
app.use(errorController.respondInternalError);

app.listen(PORT,()=>{
    console.log(`server start port ${PORT}`)
})
