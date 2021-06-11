let introduction = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./college/introduction',{userid});
}

let history = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./college/history',{userid});
}

let teachers = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./college/teachers',{userid});
}

let interior = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./college/interior',{userid});
}

let location = (req,res)=>{
    let {userid} = req.cookies;
    res.render('./college/location',{userid});
}

module.exports = {
    introduction,
    history,
    teachers,
    interior,
    location
}