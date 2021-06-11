let main = (req, res)=>{
    let {msg} = req.query;
    let {userid} = req.cookies;
    res.render('./index',{msg,userid})
}

module.exports = {
    main
}