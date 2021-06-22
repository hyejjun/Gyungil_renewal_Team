
let { clients } = require('../admin/consult/consult.controller')
let {socket, io} = require('../../server'); 


let getchat = (req, res) => {
  res.render('./chat/chat.html')
}

let request = (req, res) => {
  let { id, name, age } = req.body;
  let now = new Date();
  let mm = now.getMonth() + 1;
  let d = now.getDate();
  let h = now.getHours();
  let m = now.getMinutes();

  now = `${mm}/${d}  ${h}:${m}`
  let temp = {};
  temp['id'] = id;
  temp['name'] = name;
  temp['age'] = age;
  temp['date'] = now;
  temp['consultant'] = null;
  temp['on']=true;
  let flag = true;

  clients.forEach(v => {
    if (v.id == id) {
      flag = false;
    }
  })

  if (flag) clients.push(temp);
  console.log(clients);

  res.json({});
}


let send = async (req, res) => {
  let id = req.body.id;
  let consultant_id;
  clients.forEach(v => {
    if (v.id == id) {
      consultant_id = v.consultant;
    }
  })
  res.json({ consultant_id, })

}

let end = (req,res)=>{
  console.log(req.body.data);
  let {data} = req.body;

  for(let i = 0; i<clients.length; i++){ 
    if(clients[i].id==data){
      console.log('catch'); 
      clients[i].on = false; 
      break;  
    }
  }
  
}






module.exports = {
  request,
  getchat,
  send,
  end, 
}