
const Caver = require('caver-js')
const caver = new Caver('https://api.baobab.klaytn.net:8651/')


const account = caver.klay.accounts.create()
const wallet = caver.klay.accounts.wallet
wallet.add(account)

wallet.clear()
wallet.create(2)

const tx = {
    type : 'VALUE_TRANSFER', from : wallet[0].address, to:wallet[1].address,
    value: caver.utils.toPeb('1', 'KLAY'),
    gas: 30000
}

caver.klay.accounts.signTransaction(tx, wallet[0].privateKey).then(console.log)