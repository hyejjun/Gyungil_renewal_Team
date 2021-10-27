import {combineReducers} from 'redux'
import user from './user'
import reducer from './user'
import {initialState} from './user'
import {AnyAction} from 'redux';
import {HYDRATE} from 'next-redux-wrapper';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import {State} from '../reducers/user'

const persistConfig = {
    key: 'nextjs',
    whitelist: ['fromClient'], // make sure it does not clash with server keys
    storage
};

const rootReducer = combineReducers({
    index:(state:State = initialState,action:AnyAction)=>{
        switch (action.type){
            case HYDRATE:
                return {...state, ...action};
            default :
                return {state, action}
        }

    },
    user 
})

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>