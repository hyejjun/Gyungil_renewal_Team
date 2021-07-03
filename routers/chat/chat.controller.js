
let { clients } = require('../admin/consult/consult.controller')



let getchat = (req, res) => {
  res.render('./chat/chat.html')
}

//클라이언트가 채팅을 요청
/*

*/
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
  temp['consultant'] = null; //아직 상담사가 배정되지 않음 
  temp['on'] = true; // 클라이언트가 접속중이면 true 아니면 false
  let flag = true;

  clients.forEach(v => { // 똑같은 소켓 두번 생성되는거 막는 부분.
    if (v.id == id) {
      flag = false;
    }
  })


  if (flag) clients.push(temp);
  // 클라이언트의 정보를 담은 객체를 clients 배열에 넣음 
  console.log(clients);

  res.json({});
}


//안쓰는 부분. 
// 메시지를 보낼 때, 
// 클라이언트 정보가 담긴 객체에서 
// 상담사의 소켓아이디를 찾아서 json으로 보냄. 
//원래는 이렇게 하려고 했는데 하다보니까 이렇게 할 필요가 없어짐. 
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

// 클라이언트가 페이지를 나가면 
// on 값을 false로 바꿈,
//상담사 페이지에서 on값이 false인 클라이언트는 검은색으로 표시됨. 
let end = (req, res) => {
  console.log(req.body.data);
  let { data } = req.body;

  for (let i = 0; i < clients.length; i++) {
    if (clients[i].id == data) {
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