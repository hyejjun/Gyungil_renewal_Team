// import { HYDRATE } from 'next-redux-wrapper'
// import { combineReducers } from "redux";
// import user from './user'
// import {persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage';


// const persistConfig ={
//     key:'root',
//     storage,
//     whitelist:["user"]
// }


// const rootReducer = combineReducers({
//     index: (state = {}, action) => {
//         switch (action.type) {
//             case HYDRATE:
//                 return{
//                     ...state,
//                     ...action.payload
//                 }
//             default:
//                 return state
//         }
//     },
//     user,
// })

// export default persistReducer(persistConfig,rootReducer)

import {combineReducers} from 'redux'
import user from './user'
import item from './item'

const rootReducer = combineReducers({
    user, item
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>