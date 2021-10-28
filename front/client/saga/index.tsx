import {all, fork} from 'redux-saga/effects'
import userSaga from './user'
import itemSaga from './item'


export default function* rootSaga(){
    yield all([
       fork(userSaga),
       fork(itemSaga),

    ])
}