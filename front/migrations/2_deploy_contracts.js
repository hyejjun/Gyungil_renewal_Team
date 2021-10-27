const Count = artifacts.require('./Count.sol')
const fs = require('fs')
module.exports = function (deployer) {
  deployer.deploy(Count)
    .then(() => {
    // 'deployedAddress' 파일에 최근에 배포된 컨트랙트의 주소를 기록합니다.
    if (Count._json) {
      // deployedABI에 abi 파일을 저장합니다.
      fs.writeFile(
        'deployedABI',
        JSON.stringify(Count._json.abi, 2),
        (err) => {
          if (err) throw err
          console.log(`The abi of ${Count._json.contractName} is recorded on deployedABI file`)
        })
    }
    fs.writeFile(
      'deployedAddress',
      Count.address,
      (err) => {
        if (err) throw err
        console.log(`The deployed contract address * ${Count.address} * is recorded on deployedAddress file`)
    })
  })
}