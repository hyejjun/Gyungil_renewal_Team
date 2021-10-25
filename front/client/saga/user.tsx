import { all, fork, put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'


function addUser(){
    // 실행할 내용
    // ex)
    // const result = yield call(axios.get,`${url}/board/likes`)
    // const {data} = result
    // if(data.result=='OK'){
    //     yield put({
    //         type:'GET_LIKES_SUCCESS',
    //         list:data.list
    //     })
    // }else {
    //     yield put({
    //         type:'GET_LIKES_ERROR'
    //     })
    // }

    // 참고 https://github.com/dnjzm108/gamgwi2/blob/master/front/saga/post.js
    

    
}

function* userJoin(){
    yield takeLatest('USER_JOIN_REQUEST',addUser)
}

export default function* userSaga() {
    yield all([
        fork(userJoin)
    ])
}