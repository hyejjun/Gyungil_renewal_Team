
interface Tel {
    tel1:number,
    tel2:number,
    tel3:number
}

export interface User {
    UserAddress:string;
    tel:Tel,
    email:string[]
}

export const initialState :User = {
    UserAddress:'front',
    tel:{
        tel1:1,
        tel2:1,
        tel3:1,
    },
    email:['web7722','gmail.com']
};


const USER_LOGIN_REQUEST  = "USER_LOGIN_REQUEST" as const;
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR" as const;

export const UserLogin_REQUEST = (payload) => {
    return{
        type:USER_LOGIN_REQUEST,
        data:payload,
    }
}
export const UserLogin_SUCCESS = (klaytnAddress) => {
    return{
        type:USER_LOGIN_SUCCESS,
        data:klaytnAddress
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


const reducer = (state:User=initialState, action:UserAction) => {
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                data:action.data,
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                UserAddress:action.data

            }
            
        case USER_LOGIN_ERROR:
            return{
                data:action.error
            }
        default:
            return state;
    }
}

export default reducer