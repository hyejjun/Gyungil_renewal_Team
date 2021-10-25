import React, { useEffect, useState } from "react";
import AddItemComponent from '../../components/item/AddItemComponent';

const addItem = () =>{
    const [userId, setUserId] = useState<string>('dfassf');
    const [n, setN] = useState<number>(10)

    const [ifSell, setifSell] = useState<boolean>(true);
    const [extension, setExtension] = useState<boolean>(true);

    const [agreed, setAgreed] = useState<boolean>(false)
    const [agreeed, setAgreeed] = useState<boolean>(false)
    const [allAgreed, setAllAgreed] = useState<boolean>(false)


    const sellToggle = (value:boolean): void => {
        setifSell(value)
    }

    const extensionToggle = (value:boolean): void => {
        setExtension(value)
    }

    const ifAgreed = (value:number) => {
        if(value === 1){
            setAgreed(!agreed)
        } else if(value===2){
            setAgreeed(!agreeed)
        }
    }

    useEffect(()=>{
        if(agreed == true && agreeed == true){
            setAllAgreed(true)
        } else {
            setAllAgreed(false)
        }
    },[agreed, agreeed])

   
    return(
        <AddItemComponent 
        userId = {userId}
        n = {n}
        
        ifSell = {ifSell} 
        extension = {extension}
        sellToggle = {sellToggle}
        extensionToggle = {extensionToggle}

        agreed = {agreed}
        agreeed = {agreeed}
        ifAgreed = {ifAgreed}
        />

    )
}

export default addItem
