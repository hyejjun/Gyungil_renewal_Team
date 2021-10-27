import { all, fork, put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import {url} from './url'

/*

파일 업로드
NFT발행
데이터 전송?

*/

function picAPI(data) {
    return axios.post(`${url}/item/additem/fileupload`, data)   
}

function* picUpload(action) {
    const result = yield call(picAPI, action.data)
    const { data } = result

    if (data.result === 'OK') {
        yield put({
            type: 'PIC_UPLOAD_SUCCESS',
            data: data.msg
        })
    } else {
        yield put({
            type: 'PIC_UPLOAD_ERROR',
            data: data.msg
        })
    }
}

function* reqUpload() {
    yield takeLatest('PIC_UPLOAD_REQUEST', picUpload)
}

function itemAPI(data) {
    return axios.post(`${url}/item/additem/itemupload`, data)   
}

function* addItem(action) {
    const result = yield call(itemAPI, action.data)
    const { data } = result

    if (data.result === 'OK') {
        yield put({
            type: 'ITEM_UPLOAD_SUCCESS',
            data: data.msg
        })
    } else {
        yield put({
            type: 'ITEM_UPLOAD_ERROR',
            data: data.msg
        })
    }
}

function* reqAddItem() {
    yield takeLatest('ITEM_UPLOAD_REQUEST', addItem)
}


export default function* itemSaga() {
    yield all([
        fork(reqUpload),
        fork(reqAddItem),
        // fork(reqGetLikes),
    ])
}