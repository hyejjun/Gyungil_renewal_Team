import { createStore, applyMiddleware, Middleware, StoreEnhancer, Store } from "redux"
import rootReducer from "../reducers"
import { Context,MakeStore, createWrapper } from "next-redux-wrapper";
import createSagaMiddleware,{Task} from "redux-saga";
import rootSaga from '../saga'
import {RootState} from '../reducers'

export interface SagaStore extends Store {
    sagaTask: Task;
}

const bindMiddleware = (middleware:Middleware[]):StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}


const makeStore = (context:Context) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const store = createStore(rootReducer, {}, bindMiddleware([...middlewares]));
    sagaMiddleware.run(rootSaga);
    return store
}

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });



