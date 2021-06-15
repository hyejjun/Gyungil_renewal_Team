const { board, hit } = require("../models");
const { Op, DATEONLY } = require("sequelize");


async function update_hit(id, ip) {
  let now = new Date();

  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  if (m < 10) m = '0' + m;
  if (d < 10) d = '0' + d;
  now = `${y}-${m}-${d}`


  let cnt = await hit.findOne({
    where: {
      [Op.and]: [{ board_id: id }, { ip: ip }, { date: now }]
    }
  })

  if (cnt == null) { // hit 업데이트 가능한 부분. 
    //hit +1 해주는 부분. 
    let originHit = await board.findOne({
      attributes: ['hit'],
      where: { id, }
    })
    let newhit = originHit.dataValues.hit + 1;

    await board.update({
      hit: newhit,
    }, {
      where: { id, }
    })
   
    let exist = await hit.findOne({
      where: {
        [Op.and]: [{ board_id: id }, { ip: ip }]
      }
    }) 

    if(exist==null){ //create
      await hit.create({
        board_id: id,
        ip: ip,
        date: new Date(),  
      })

    }else{ //update
      await hit.update({
        date: new Date(),  
      },{
        where:{id:exist.dataValues.id}
      })
    }
  }
}




module.exports = {
  update_hit
}

