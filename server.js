const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const router = require('./routers');
const PORT = 3000;
const errorController = require("./routers/errorController");

const app = express();

app.set('view engine', 'html')
nunjucks.configure('views',{
    express: app
})

app.use(express.static('static'))

app.use(bodyParser.urlencoded({extended: true}))

app.use('/',router)

app.use(errorController.pageNotFoundError);
app.use(errorController.respondInternalError);

app.listen(PORT,()=>{
    console.log(`server start port ${PORT}`)
})
