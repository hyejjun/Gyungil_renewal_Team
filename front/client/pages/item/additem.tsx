import React, { useEffect, useState } from "react";
import AddItemComponent from '../../components/item/AddItemComponent';
import useInput from '../../hooks/useInput'

const addItem = () =>{
    const [userId, setUserId] = useState<string>('dfassf');
    const [n, setN] = useState<number>(10)

    const [ifSell, setifSell] = useState<boolean>(true);
    const [extension, setExtension] = useState<boolean>(true);

    const [agreed, setAgreed] = useState<Array<boolean>>([false,false])
    const [allAgreed, setAllAgreed] = useState<boolean>(false)

    const name = useInput('')

    const sellToggle = (value:boolean) => {
        setifSell(value)
    }

    const extensionToggle = (value:boolean) => {
        setExtension(value)
    }

    const ifAgreed = (value:number) => {
        if(value === 1){
            setAgreed([!agreed[0],agreed[1]])
        } else if(value === 2){
            setAgreed([agreed[0],!agreed[1]])
        }
    }

    useEffect(()=>{
        if(agreed[0] === true && agreed[1] === true){
            setAllAgreed(true)
        } else {
            setAllAgreed(false)
        }
    },[agreed])
   
    return(
        <AddItemComponent 
        // 상품 등록 페이지
        userId = {userId}
        n = {n}
        // 판매/경매 컴포넌트용
        ifSell = {ifSell} 
        extension = {extension}
        sellToggle = {sellToggle}
        extensionToggle = {extensionToggle}
        // 동의란 컴포넌트용
        ifAgreed = {ifAgreed}
        />

    )
}

export default addItem
