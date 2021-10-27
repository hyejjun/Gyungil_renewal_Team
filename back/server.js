const express = require('express');
const app = express();

const mongoose = require('mongose')

const 


app.get('/',(req,res)=>{
    res.send('나오니?')
})

app.listen(4000,()=>{
    console.log(`server start ${4000}`)
})