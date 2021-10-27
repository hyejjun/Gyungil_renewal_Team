export interface Item {
    loading:boolean;
    data:any;
    payload:any;
    error:any;

}

const initialState :Item = {
    loading:false,
    data:[],
    payload:{},
    error:''
};

export 

const PIC_UPLOAD_REQUEST = "PIC_UPLOAD_REQUEST" as const;
const PIC_UPLOAD_SUCCESS = "PIC_UPLOAD_SUCCESS" as const;
const PIC_UPLOAD_ERROR = "PIC_UPLOAD_ERROR" as const;

const ITEM_UPLOAD_REQUEST = "ITEM_UPLOAD_REQUEST" as const;
const ITEM_UPLOAD_SUCCESS = "ITEM_UPLOAD_SUCCESS" as const;
const ITEM_UPLOAD_ERROR = "ITEM_UPLOAD_ERROR" as const;


/* 입력 */
export const PicUpload_REQUEST = () => {
    return {
        type: PIC_UPLOAD_REQUEST,
    }
}
export const PicUpload_SUCCESS = (data) => {
    return {
        type: PIC_UPLOAD_SUCCESS,
        data
    }
}
export const PicUpload_ERROR = () => {
    return {
        type: PIC_UPLOAD_ERROR,
    }
}

/* 가져오기 */
export const AddItem_REQUEST = () => {
    return {
        type: ITEM_UPLOAD_REQUEST,
    }
}
export const AddItem_SUCCESS = (data) => {
    return {
        type: ITEM_UPLOAD_SUCCESS,
        data
    }
}
export const AddItem_ERROR = () => {
    return {
        type: ITEM_UPLOAD_ERROR,
    }
}

type ItemAction = 
| ReturnType<typeof PicUpload_REQUEST>
| ReturnType<typeof PicUpload_SUCCESS>
| ReturnType<typeof PicUpload_ERROR>
| ReturnType<typeof AddItem_REQUEST>
| ReturnType<typeof AddItem_SUCCESS>
| ReturnType<typeof AddItem_ERROR>

const itemReducer = (state = initialState, action:ItemAction) => {
    switch (action.type) {
        /* 사진 업로드 */
        case PIC_UPLOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PIC_UPLOAD_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case PIC_UPLOAD_ERROR:
            return {
                ...state,
                loading: false,
            }
        /* 최종 입력값 업로드 */
        case ITEM_UPLOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ITEM_UPLOAD_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: true,
            }
        case ITEM_UPLOAD_ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default itemReducer