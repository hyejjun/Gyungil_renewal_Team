const crypto = require('crypto');  
const path = require('path')
require('dotenv').config({path: path.join(__dirname, '.env')})

function jwtPW(userpw){
    const cryptopw = crypto.createHash('sha256',Buffer.from(process.env.salt).toString())
                            .update(userpw)
                            .digest('base64')
                            .replace('=','')
                            .replace('==','');
    return cryptopw;
}

module.exports = jwtPW;


