import {combineReducers} from 'redux'
import user from './user'
import {initialState} from './user'
import {AnyAction} from 'redux';
import {HYDRATE} from 'next-redux-wrapper';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'nextjs',
    whitelist: ['fromClient'], // make sure it does not clash with server keys
    storage
};

const rootReducer = combineReducers({
    index:(state : {} = initialState,action:AnyAction)=>{
        switch (action.type){
            case HYDRATE:
                return {...state, ...action.payload};
            default :
                return state
        }

    },
    user
})

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>