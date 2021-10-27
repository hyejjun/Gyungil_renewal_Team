import Btn from "../../components/common/Btn"
import { useDispatch, useSelector } from "react-redux"
import { UserLogin_REQUEST } from "../../reducers/user"
import { RootState } from "../../reducers"
import { useEffect } from 'react'
import InvoiceForm from "../../components/shipping/InvoiceForm"


const test = () => {
    interface Variable {
        test:Object;
    }
    const initialState : Variable = {
        test:{}
    }
    const test = useSelector((state:RootState )=> state.user)
    console.log(test)
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(UserLogin_REQUEST({test:'testtttt'}))
        }, [])
    
    return(
        <>
            <InvoiceForm/>
        </>
    )
}

export default test