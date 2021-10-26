import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";
import {url} from './url'

function loginAPI(data){
    return axios.post(`${url}/user/login`,data,{ withCredentials: true })
}

function* login(action){
    let result = yield call(loginAPI,action.data)
    let {data} = result

    if (data.login_info !== undefined) {
        yield put({
            type: 'USER_LOGIN_SUCCESS',
            data: 'OK',
            user_info:data.login_info
        })
    } else {
        yield put({
            type: 'USER_LOGIN_ERROR',
            data: '아이디와 비밀번호를 확인해주세요'
        })
    }
    
}

function joinAPI(data){
    return axios.post(`${url}/user/join`,data)
}
function* join(action){
    let result = yield call(joinAPI,action.data)
    let {data} = result
    
    if (data !== null) {
        yield put({
            type: 'USER_JOIN_SUCCESS',
            data: 'OK',
            user_info:data
        })
    } else {
        yield put({
            type: 'USER_JOIN_ERROR',
            data: '아이디와 비밀번호를 확인해주세요'
        })
    }

}

function cookieAPI(){
    return axios.get(`${url}`,{ withCredentials: true })
}

function* cookie_check(action){
    let result = yield call(cookieAPI,action)
    let {data} = result;

    if (data.cookie == 'success') {
        yield put({
            type: 'USER_COOKIE_SUCCESS',
            data: data.cookie,
            user_info:data.user_info
        })
    } else {
        yield put({
            type: 'USER_COOKIE_ERROR',
            data: data.cookie,
        })
    }
}

function logoutAPI(){
    return axios.get(`${url}/user/logout`,{ withCredentials: true })
}
function* logout(){
    let result = yield call(logoutAPI)
}

function id_check_API(data){
    return axios.post(`${url}/user/id_check`,data)
}

function* id_check(action){
    let result = yield call(id_check_API,action)
    if(result.data.Id_check == false){
        yield put({
            type: 'USER_ID_SUCCESS',
            data: result.data.Id_check,
        })
    }else{
        yield put({
            type: 'USER_ID_ERROR',
            data: result.data.Id_check,
        })
    }
}
function* watchUser(){
    yield takeLatest('USER_LOGOUT',logout)
    yield takeLatest('USER_LOGIN_REQUEST',login)
    yield takeLatest('USER_JOIN_REQUEST',join)
    yield takeLatest('USER_COOKIE_CHECK',cookie_check)
    yield takeLatest('USER_ID_CHECKE',id_check)
}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}