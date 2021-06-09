let jobinfo = (req,res)=>{
    res.render('./jobinfo/interview');
}

let recruit = (req,res)=>{
    res.render('./jobinfo/recruit')
}

let portfolio = (req,res)=>{
    res.render('./jobinfo/portfolio')
}

module.exports = {
    jobinfo,
    recruit,
    portfolio
}