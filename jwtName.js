require('dotenv').config();
const crypto = require('crypto');
const ctoken = require('./jwt');

function jwtName(AccessToken){  
    let [header, payload, sign] = AccessToken.split('.');   
    let { username, exp } = JSON.parse(Buffer.from(payload, 'base64').toString())
    let Cusername = username;
    return Cusername;
}

module.exports = jwtName;