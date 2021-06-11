let curriculum = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./curriculum/curriculum',{userid});
}

module.exports = {
    curriculum,
}