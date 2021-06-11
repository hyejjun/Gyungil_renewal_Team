let jobinfo = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./jobinfo/interview',{userid});
}

let recruit = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./jobinfo/recruit',{userid})
}

let portfolio = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./jobinfo/portfolio',{userid})
}

module.exports = {
    jobinfo,
    recruit,
    portfolio
}