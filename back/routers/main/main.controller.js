const { sequelize, Auction, Items } = require('../../models/index')
const express = require('express')
const app = express()
const http = require('http')
const socket = require('socket.io')

const server = http.createServer(app)
const io = socket(server)

let insert = (req, res) => {
    // 경매 가격 설정 후 사용자들이 가격을 입력하는 페이지
    res.render('insert.html')
}

let insertData = async (req, res) => {
    // 입력한 경매 정보를 DB에 입력
    const {price, time} = req.body
    await Items.create({price, dueDate:time})
    res.send({success: true})
}

let main = (req, res) => {
    // 경매 정보 입력 페이지
    res.render('index.html')
}

let mainData = async (req, res) => {
    // 유저들이 입력한 비딩 정보를 화면에 출력하기 위함(새로고침 시에도 가능하도록)
    // 쿼리든 뭐든 링크를 누르면 id값을 전송할 수 있어야 함

    let {productId} = req.body
    let bidList = await Auction.findAll({
        where:{
            productId
        }
    })

    let getPrice = await Items.findOne({
        where:{
            id: productId
        }
    })
    res.send([bidList,getPrice.dataValues.price])
}

let auction = async (req, res) => {
    // 유저가 입찰을 하면 작업하는 페이지
    const {name, price, productId} = req.body
    console.log(req.body)
    // 테스트 버전에서 상품 ID는 1번으로만 진행되나, 실제로는 상품별로 ID값을 다르게 주어야 함
    let result = await Auction.findAll({
        where:{
            productId
        }
    })
    let getDue = await Items.findOne({
        where:{
            id: productId
        }
    })
    let dueTime = getDue.dataValues.dueDate.toTimeString()
    let lastPrice
    result.length == 0 
    ? lastPrice = getDue.dataValues.price 
    : lastPrice = result[result.length-1].dataValues.price
    // 최종가 입력이 안되어있는 경우 items에 입력된 기본 가격으로 설정
    // 입력된 가격이 있으면 가장 마지막에 등록된 가격을 가져온다(낮은 가격으로는 입찰이 안되기 때문)

    function timeCalc(time){
        let now = new Date().toTimeString()
        // let test = await sequelize.query('SELECT NOW();')
        // console.log(test[0][0],'시퀄라이즈')
        console.log(now, '현재')
        console.log(time, '입력된시간')
        console.log(now<time)
        return (now<time) // 입력된 시간이 현재 시간보다 미래인가?
        // 반환값이 true면 종료되지 않은 경매, false면 종료된 경매
    }
    console.log(timeCalc(dueTime))
    if(timeCalc(dueTime) === true){
        // 진행중인 경매라면
        if(price>lastPrice){
            // 입력된 가격이 현재 입찰가보다 높다면
            await Auction.create({
                name,
                price,
                productId
            })
            // Auction DB에 입찰 정보 입력
            await sequelize.query(`UPDATE items SET 
            dueDate = items.dueDate + INTERVAL 5 SECOND 
            WHERE id=${getDue.dataValues.id}; 
            `) 
            // 그리고 해당 상품 id의 마감시간을 5분 연장시킨다
            // -> getDue.dataValues.id 대신 productId를 써도 되긴 한데...
            res.send({success: true})
            // 프론트 쪽에 성공임을 알림
        } else{
            res.send({success: false, reason: 'price'})
            // 입력 가격이 현재 입찰가보다 낮음
        }
    } else{
        console.log('경매 종료')
        res.send({success: false, reason: 'expired'})
    }

}

module.exports = {insert, insertData, main, mainData, auction}
