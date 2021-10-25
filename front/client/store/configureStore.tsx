import {createWrapper} from 'next-redux-wrapper'
import {applyMiddleware,compose,createStore,combineReducers} from 'redux'
import reducer from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSaga from 'redux-saga'
import rootSaga from '../saga/index'
// ex) import userSaga from '../saga/user'


const loggerMiddleware = ({dispatch,getState}) => (next) => (action) => {
    return next(action)
}

const combinedReducer = combineReducers({
    // // OTHER REDUCERS WILL BE ADDED HERE
    //userSaga,
})

const configureStore = ()=>{
    const sagaMiddleware = createSaga()

    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
        key: "nextjs",
        whitelist: ["user"], // only counter will be persisted, add other reducers if needed
        storage, // if needed, use a safer storage
    };

    const middlewares = [sagaMiddleware]
   
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
 
    const Store = createStore(reducer,enhancer)
    Store.sagaTask = sagaMiddleware.run(rootSaga)


    const persistedReducer = persistReducer(persistConfig, combinedReducer); 
    Store.__persistor = persistStore(Store);
    return Store
}


const wrapper = createWrapper(configureStore,{
    debug : process.env.NODE_ENV === 'development'
})     
export default wrapper

