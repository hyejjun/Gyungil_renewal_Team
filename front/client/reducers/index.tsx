import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig ={
    key:'root',
    storage,
    whitelist:["user"]
}

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                return{
                    //...state,
                    // ...state 빨간줄... 왜 그런지 모르겠...
                    ...action.payload
                }
            default:
                return state
        }
    },
    // 리듀서 각 파일 불러온거 여기에 넣어주면 됨.
    // post,
    
})

export default persistReducer(persistConfig,rootReducer)