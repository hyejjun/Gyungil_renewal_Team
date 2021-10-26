// const initalState = {
//     loadding: false,
//     IsLogin: false,
//     user_info: {},
//     Id_check: ''
// }

// const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
// const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
// const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"
// const USER_LOGOUT = "USER_LOGOUT"

// const USER_JOIN_REQUEST = "USER_JOIN_REQUEST"
// const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS"
// const USER_JOIN_ERROR = "USER_JOIN_ERROR"

// const USER_ID_CHECKE = "USER_ID_CHECKE"
// const USER_ID_SUCCESS = "USER_ID_SUCCESS"
// const USER_ID_ERROR = "USER_ID_ERROR"

// const USER_COOKIE_CHECK = "USER_COOKIE_CHECK"
// const USER_COOKIE_SUCCESS = "USER_COOKIE_SUCCESS"
// const USER_COOKIE_ERROR = "USER_COOKIE_ERROR"

// const test = "test"

// export const User_Logout = () => {
//     return {
//         type: USER_LOGOUT
//     }
// }

// export const User_Id_Checke = data => {
//     return {
//         type: USER_ID_CHECKE,
//         data
//     }
// }

// export const UserLogin_REQUEST = data => {
//     console.log('나오나')
//     return {
//         type: USER_LOGIN_REQUEST,
//         data,
//     }
// }

// export const UserJoin_REQUEST = data => {
//     return {
//         type: USER_JOIN_REQUEST,
//         data
//     }
// }

// export const UserCookieCheck = data => {
//     return {
//         type: USER_COOKIE_CHECK
//     }
// }

// const reducer = (state = initalState, action) => {
//     switch (action.type) {

//         case 'test' :
//             return{
//                 ...state,
//                 Id_check: ''
//             }

//         case USER_LOGIN_REQUEST:
//             return {
//                 ...state,
//                 loadding: true,
//             }


//         case USER_LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 IsLogin: true,
//                 loadding: false,
//                 data: action.data,
//                 user_info: action.user_info,
//             }
//         case USER_LOGIN_ERROR:
//             return {
//                 ...state,
//                 loadding: false,
//                 data: action.data,
//             }

//         case USER_JOIN_REQUEST:
//             return {
//                 ...state,
//                 loadding: true,
//             }

//         case USER_JOIN_SUCCESS:
//             return {
//                 ...state,
//                 loadding: false,
//                 user_info: action.user_info
//             }

//         case USER_JOIN_ERROR:
//             return {
//                 ...state,
//                 loadding: false,
//             }
//         case USER_LOGOUT:
//             return {
//                 ...state,
//                 IsLogin: false,
//                 user_info: {},
//                 data: 'logout'

//             }

//         case USER_ID_CHECKE:
//             return {
//                 ...state,
//                 lodding: true,
//                 Id_check: action
//             }

//         case USER_ID_SUCCESS:
//             return {
//                 ...state,
//                 lodding: false,
//                 Id_check: action.data
//             }

//         case USER_ID_ERROR:
//             return {
//                 ...state,
//                 lodding: false,
//                 Id_check: action.data
//             }

//         case USER_COOKIE_CHECK:
//             return {
//                 ...state,
//                 lodding: true,
//             }

//         case USER_COOKIE_SUCCESS:
//             return {
//                 ...state,
//                 loadding: false,
//                 user_info: action.user_info
//             }

//         case USER_COOKIE_ERROR:
//             return {
//                 ...state,
//                 lodding: false,

//             }

//         default:
//             return state
//     }
// }


// const USER_LOGIN_REQUEST  = "USER_LOGIN_REQUEST" as const;
// const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;
// const USER_LOGIN_ERROR = "USER_LOGIN_ERROR" as const;
// const USER_LOGOUT = "USER_LOGOUT" as const;

// export type User = {
//     id:number;
//     loadding:boolean;
//     data1:any;
// }

// export type Users = User[];

// export const initialState: User[] = [
//     {   
//         id:0,
//         loadding:false,
//         data1:'data'
//     },
//     {
//         id:1,
//         loadding:false,
//         data1:'data'
//     },
// ]


// export const UserLogin_REQUEST = (data1:any) => ({type:USER_LOGIN_REQUEST,payload:data1});


// type UserAction = 
// | ReturnType<typeof UserLogin_REQUEST>

// const reducer = (state: Users = initialState,action: UserAction ): Users {
//     switch (action.type){
//         case USER_LOGIN_REQUEST:
//             return {
//                 ...state,
//             }
            
                
            
//         default:
//             return state
//     }

// }

export interface User {
    loadding:boolean;
    data:Array<string | number>;
    payload:Object;
    error:string;

}

const initialState :User = {
    loadding:false,
    data:[],
    payload:{},
    error:''
};

export 

const USER_LOGIN_REQUEST  = "USER_LOGIN_REQUEST" as const;
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR" as const;

export const UserLogin_REQUEST = (payload) => {
    return{
        type:USER_LOGIN_REQUEST,
        data:payload,
    }
}
export const UserLogin_SUCCESS = (data) => {
    return{
        type:USER_LOGIN_SUCCESS,
        data:data,
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


const reducer = (state=initialState, action:UserAction) => {
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                data:action.data,
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                data:action.data
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