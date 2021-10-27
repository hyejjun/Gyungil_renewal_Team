// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0xc85895b05b9f40872e744884dc835078f5c744e1a8202775c1002a5046a14807' // 싱글 따옴표 안에 자신의 프라이빗 키 입력하세요.

// 스마트 컨트랙트를 배포할 수 있는 간단한 기본 설정
module.exports = {
    networks: {
        klaytn: {
            provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null,
        }
    }
}