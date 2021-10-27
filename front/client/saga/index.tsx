import {all, fork} from 'redux-saga/effects'
//import writeSaga from './post'
import userSaga from './user'
import itemSaga from './item'

export default function* rootSaga(){
    yield all([
        //fork(writeSaga),
       fork(userSaga),
       fork(itemSaga)
    ])
}