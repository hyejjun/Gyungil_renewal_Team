import {AnyAction} from 'redux'
import {HYDRATE} from 'next-redux-wrapper';



export interface State {
    loadding:boolean;
    data:Array<string | number | Object>;
    payload:{};
    error:string;
    UserAddress:string;
    verify:boolean;
}

export const initialState : State = {
    loadding:false,
    data:[],
    payload:{},
    error:'',
    UserAddress:'kaikasAddress',
    verify:false,
};



export const USER_LOGIN_REQUEST  = "USER_LOGIN_REQUEST" as const;
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR" as const;
export const SELLER_ADMIN_SUCCESS = "SELLER_ADMIN_SUCCESS" as const;
export const SELLER_ADMIN_BACK = "SELLER_ADMIN_BACK" as const;

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

export const SellerAdmin_REQUEST = (error) => {
    return{
        type:SELLER_ADMIN_SUCCESS,
        error:error
    }
}

export const SellerAdmin_BACK = () => {
    return{
        type:SELLER_ADMIN_BACK,
    }
}
type UserAction = 
| ReturnType<typeof UserLogin_REQUEST>
| ReturnType<typeof UserLogin_SUCCESS>
| ReturnType<typeof UserLogin_ERROR>
| ReturnType<typeof SellerAdmin_REQUEST>
| ReturnType<typeof SellerAdmin_BACK>

const reducer = (state:State=initialState, action:UserAction) => {
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                UserAddress:action.data
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
        case SELLER_ADMIN_SUCCESS:
            return{
                ...state,
                error:'안뇽'
            }
        case SELLER_ADMIN_BACK:
            return{
                ...state,
                verify:true
            }
        default:
            return state;
    }
}

export default reducer