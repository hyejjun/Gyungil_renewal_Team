// import {createWrapper} from 'next-redux-wrapper'
// import { applyMiddleware, compose, createStore,combineReducers } from 'redux'
// import reducer from '../reducers'       
// import {composeWithDevTools} from 'redux-devtools-extension'
// import createSaga from 'redux-saga'
// import rootSaga from '../saga/index'
// import userSaga from '../saga/user'

// /*
//     reudx-saga
//     context == redux
//     context 비동기통신 
//     redux why? middleware 
//     middleware 비동기통신 
//     congtext useEffect 컴포넌트에서 api통신하는 코드르 작성해야됫는데

//     따로 코드를 작성해서 실행할수있겠금 처리해줄수있음.
//                 middleware
//     disaptch  reducer  state 

//     redux 설정할줄알아야
//     redux saga 를 사용가능함 -> redux의 미들웨어 
// */

// const loggerMiddleware = ({dispatch,getState}) => (next) => (action) => {
//     return next(action)
// }

// const combinedReducer = combineReducers({
//     userSaga,
//     // OTHER REDUCERS WILL BE ADDED HERE
//   });

// const configureStore = ()=>{
//     const sagaMiddleware = createSaga()

//     const { persistStore, persistReducer } = require("redux-persist");
//     const storage = require("redux-persist/lib/storage").default;

//     const persistConfig = {
//         key: "nextjs",
//         whitelist: ["user"], // only counter will be persisted, add other reducers if needed
//         storage, // if needed, use a safer storage
//     };

//     const middlewares = [sagaMiddleware]
   
//     const enhancer = process.env.NODE_ENV === 'production'
//     ? compose(applyMiddleware(...middlewares))
//     : composeWithDevTools(applyMiddleware(...middlewares))
 
//     const Store = createStore(reducer,enhancer)
//     Store.sagaTask = sagaMiddleware.run(rootSaga)


//     const persistedReducer = persistReducer(persistConfig, combinedReducer); 
//     Store.__persistor = persistStore(Store);
//     return Store
// }


// const wrapper = createWrapper(configureStore,{
//     debug : process.env.NODE_ENV === 'development'
// })     
// export default wrapper

import { createStore, applyMiddleware, Middleware, StoreEnhancer,Store } from "redux"
import rootReducer from "../reducers"
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootSaga from '../saga'
import {User} from '../reducers/user'

const bindMiddleware = (middleware:Middleware[]):StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}

// const makeStore: MakeStore<{}> = () => {
//     const sagaMiddleware = createSagaMiddleware();
//     const middlewares = [sagaMiddleware];

//     const store = createStore(rootReducer, {}, bindMiddleware([...middlewares]));
//     sagaMiddleware.run(rootSaga);
//     return store
// }

const makeStore = (context:Context) => createStore(rootReducer)

export const wrapper = createWrapper<Store<User>>(makeStore, { debug: true });