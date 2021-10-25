import {all, fork} from 'redux-saga/effects'
// ex)
// import writeSaga from './post'

export default function* rootSaga(){
    yield all([
        //fork(writeSaga)
        // 사용하기 위해서 이런식으로 해주어야함.

    ])
}