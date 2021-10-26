const fs = require('fs')
const Caver = require('caver-js')
const caver = new Caver('https://your.en.url:8651/')

async function testFunction() {
    // Read keystore json file
    const keystore = fs.readFileSync('./keystore.json', 'utf8')
    // Decrypt keystore
    const keyring = caver.wallet.keyring.decrypt(keystore, 'password')
    console.log(keyring)
    // Add to caver.wallet
    caver.wallet.add(keyring)
    // Create value transfer transaction
    const vt = caver.transaction.valueTransfer.create({
        from: keyring.address,
        to: '0x8084fed6b1847448c24692470fc3b2ed87f9eb47',
        value: caver.utils.toPeb(1, 'KLAY'),
        gas: 25000,
    })
    // Sign to the transaction
    const signed = await caver.wallet.sign(keyring.address, vt)
    // Send transaction to the Klaytn blockchain platform (Klaytn)
    const receipt = await caver.rpc.klay.sendRawTransaction(signed)
    console.log(receipt)
}
testFunction()