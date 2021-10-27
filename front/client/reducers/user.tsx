import {AnyAction} from 'redux'
import {HYDRATE} from 'next-redux-wrapper';



export interface State {
    loadding:boolean;
    data:Array<string | number | Object>;
    payload:{};
    error:string;
    UserAddress:string;
}

export const initialState : State = {
    loadding:false,
    data:[],
    payload:{},
    error:'',
    UserAddress:'kaikasAddress'
};



export const USER_LOGIN_REQUEST  = "USER_LOGIN_REQUEST" as const;
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR" as const;

export const UserLogin_REQUEST = (UserAddress) => {
    return{
        type:USER_LOGIN_REQUEST,
        data:UserAddress
    }
}
export const UserLogin_SUCCESS = (klaytnAddress) => {
    return{
        type:USER_LOGIN_SUCCESS,
        data:klaytnAddress.UserAddress
    }
}
export const UserLogin_ERROR = (error) => {
    return{
        type:USER_LOGIN_ERROR,
        error:error,
    }
}

type UserAction = 
| ReturnType<typeof UserLogin_REQUEST>
| ReturnType<typeof UserLogin_SUCCESS>
| ReturnType<typeof UserLogin_ERROR>


const reducer = (state:State=initialState, action:UserAction) => {
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
<<<<<<< HEAD
                UserAddress:action.data
=======
                data:action.data
>>>>>>> d932f29ff410e243e0e26c041102c26ab62d260a
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                data:action.data
            }
            
        case USER_LOGIN_ERROR:
            return{
                ...state,
                data:action.error
            }
        default:
            return state;
    }
}

export default reducer