let introduction = (req,res)=>{
    res.render('./college/introduction');
}

let history = (req,res)=>{
    res.render('./college/history');
}

let teachers = (req,res)=>{
    res.render('./college/teachers');
}

let interior = (req,res)=>{
    res.render('./college/interior');
}

let location = (req,res)=>{
    res.render('./college/location');
}

module.exports = {
    introduction,
    history,
    teachers,
    interior,
    location
}