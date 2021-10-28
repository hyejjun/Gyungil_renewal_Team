import {all, fork} from 'redux-saga/effects'
import userSaga from './user'
import itemSaga from './item'
import adminSaga from './admin'

export default function* rootSaga(){
    yield all([
       fork(userSaga),
       fork(itemSaga),
       fork(adminSaga),
    ])
}