const initalState = {
    loading: false,
}

const POST_INSERT_REQUEST = "POST_INSERT_REQUEST"
const POST_INSERT_SUCCESS = "POST_INSERT_SUCCESS"
const POST_INSERT_ERROR = "POST_INSERT_ERROR"
const POST_INSERT_RESET = "POST_INSERT_RESET"

const POST_GET_REQUEST = "POST_GET_REQUEST"
const POST_GET_SUCCESS = "POST_GET_SUCCESS"
const POST_GET_ERROR = "POST_GET_ERROR"

const POST_VIEW_IDX = "POST_VIEW_IDX"
const POST_VIEW_REQUEST = "POST_VIEW_REQUEST"
const POST_VIEW_SUCCESS = "POST_VIEW_SUCCESS"
const POST_VIEW_ERROR = "POST_VIEW_ERROR"

const POST_MODIFY_REQUEST = "POST_MODIFY_REQUEST"
const POST_MODIFY_SUBMIT_REQUEST = "POST_MODIFY_SUBMIT_REQUEST"
const POST_MODIFY_SUCCESS = "POST_MODIFY_SUCCESS"
const POST_MODIFY_ERROR = "POST_MODIFY_ERROR"

const POST_DELETE_REQUEST = "POST_DELETE_REQUEST"
const POST_DELETE_SUCCESS = "POST_DELETE_SUCCESS"
const POST_DELETE_ERROR = "POST_DELETE_ERROR"

const GET_LIKES_REQUEST = "GET_LIKES_REQUEST"
const GET_LIKES_SUCCESS = "GET_LIKES_SUCCESS"
const GET_LIKES_ERROR = "GET_LIKES_ERROR"

const ADD_LIKES_REQUEST = "ADD_LIKES_REQUEST"
const ADD_LIKES_SUCCESS = "ADD_LIKES_SUCCESS"
const ADD_LIKES_ERROR = "ADD_LIKES_ERROR"

const POST_SEARCH_REQUEST = "POST_SEARCH_REQUEST"
const POST_SEARCH_SUCCESS = "POST_SEARCH_SUCCESS"
const POST_SEARCH_ERROR = "POST_SEARCH_ERROR"

/* 입력 */
export const PostInsert_REQUEST = data => {
    return {
        type: POST_INSERT_REQUEST,
        data
    }
}
export const PostInsert_SUCCESS = () => {
    return {
        type: POST_INSERT_SUCCESS,
        data
    }
}
export const PostInsert_ERROR = () => {
    return {
        type: POST_INSERT_ERROR,
        data
    }
}

/* 가져오기 */
export const PostGet_REQUEST = () => {
    return {
        type: POST_GET_REQUEST,
    }
}
export const PostGet_SUCCESS = (list) => {
    return {
        type: POST_GET_SUCCESS,
        list
    }
}
export const PostGet_ERROR = () => {
    return {
        type: POST_GET_ERROR,
    }
}



//검색 가져오기
export const PostSearch_REQUEST = (data) => {
    return {
        type: POST_SEARCH_REQUEST,
        data
    }
}
export const PostSearch_SUCCESS = (data) => {
    return {
        type: POST_SEARCH_SUCCESS,
        data
    }
}
export const PostSearch_ERROR = () => {
    return {
        type: POST_SEARCH_ERROR,
    
    }
}

/* 좋아요 누른 list 가져오기 */
export const GetLikes_REQUEST = () => {
    return {
        type: GET_LIKES_REQUEST
    }
}
export const GetLikes_SUCCESS = (list) => {
    return {
        type: GET_LIKES_SUCCESS,
        list
    }
}
export const GetLikes_ERROR = () => {
    return {
        type: GET_LIKES_ERROR
    }
}

/* 좋아요 누르기 */
export const AddLikes_REQUEST = (likeData) => {
    return {
        type: ADD_LIKES_REQUEST,
        likeData
    }
}
export const AddLikes_SUCCESS = (addLike) => {
    return {
        type: ADD_LIKES_SUCCESS,
    }
}
export const AddLikes_ERROR = () => {
    return {
        type: ADD_LIKES_ERROR
    }
}



/* 글 view 보기 */
export const PostView_IDX = (idx) => {
    return {
        type: POST_VIEW_IDX,
        idx,
    }
}

export const PostView_REQUEST = (idx) => {
    return {
        type: POST_VIEW_REQUEST,
        idx,
    }
}
export const PostView_SUCCESS = (data) => {
    return {
        type: POST_VIEW_SUCCESS,
    }
}
export const PostView_ERROR = () => {
    return {
        type: POST_VIEW_ERROR,

    }
}


/* 수정 */
export const PostModify_REQUEST = data => {
    return {
        type: POST_MODIFY_REQUEST,
        modifyData: data,
    }
}
export const PostModifySubmit_REQUEST = data => {
    return {
        type : POST_MODIFY_SUBMIT_REQUEST,
        modifiedData : data,
    }
}
export const PostModify_SUCCESS = (data) => {
    return {
        type: POST_MODIFY_SUCCESS,
    }
}
export const PostModify_ERROR = () => {
    return {
        type: POST_MODIFY_ERROR,
    }
}

/* 삭제 */
export const PostDelete_REQUEST = (idx) => {
    return {
        type: POST_DELETE_REQUEST,
        idx
    }
}

export const PostDelete_SUCCESS = (deletedList) => {
    return {
        type: POST_DELETE_SUCCESS,
        deletedList,
    }
}

export const PostDelete_ERROR = () => {
    return {
        type: POST_DELETE_ERROR,
    }
}



const postReducer = (state = initalState, action) => {
    switch (action.type) {
        /* 글 작성 */
        case POST_INSERT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case POST_INSERT_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case POST_INSERT_ERROR:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case POST_INSERT_RESET:
            return {
                ...state,
                data: undefined,
                loading: false,
            }
        /* 글 가져오기 */
        case POST_GET_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case POST_GET_SUCCESS:
            return {
                ...state,
                list: action.list,
                loading: false,
            }
        case POST_GET_ERROR:
            return {
                ...state,
                loading: false,
            }
        /* 좋아요 된 List 가져오기 */
        case GET_LIKES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_LIKES_SUCCESS:
            return {
                ...state,
                list: action.list,
                loading: false
            }

        /* 좋아요 추가하기 */
        case ADD_LIKES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_LIKES_SUCCESS:
            return {
                ...state,
                addLike:action.addLike.likeStatus,
                loading: false
            }
        case ADD_LIKES_ERROR:
            return {
                ...state,   
                loading: false
            }

        /* 글 보기 */
        case POST_VIEW_IDX:
            return {
                ...state,
                viewIdx : action.idx,
                loading: true,
            }
        case POST_VIEW_REQUEST:
            return {
                ...state,
                idx: action.idx,
                loading: true,
            }
        case POST_VIEW_SUCCESS:
            return {
                ...state,
                view: action.view,
                like: action.like,
                loading: false,
            }
        case POST_VIEW_ERROR:
            return {
                ...state,
                msg: action.msg,
                loading: false,
            }
        /* 글 삭제 */
        case POST_DELETE_REQUEST:
            return {
                ...state,
                idx: action.idx,
                loading: true,
            }
        case POST_DELETE_SUCCESS:
            let { deletedList, msg } = action
            return {
                ...state,
                deleteMsg: msg,
                deletedList,
                loading: false,
            }
        case POST_DELETE_ERROR:
            return {
                ...state,
                loading: false,
            }

        // 검색 기능===============================
        case POST_SEARCH_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case POST_SEARCH_SUCCESS:
            return{
                ...state,
                searchData:action.searchList,
                loading:false,
                
            }
            
        case POST_SEARCH_ERROR:
            return{
                ...state,
                loading:false
            }

        /* 수정 */
        case POST_MODIFY_REQUEST:
            return {
                ...state,
                modifyData: action.modifyData,
                loading: true,
            }
        case POST_MODIFY_SUBMIT_REQUEST:
            return {
                ...state,
                modifiedData: action.modifyData,
                loading: true,
            }
        case POST_MODIFY_SUCCESS:
            return {
                ...state,
                modifiedData2 : action.modifiedList,
                modifiedResult : action.type,
                loading: false,
            }
        case POST_MODIFY_ERROR:
            return {
                ...state,
                loading: false,

            }
        default:
            return state
    }
}


export default postReducer
