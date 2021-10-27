import React, { useEffect, useState } from "react"
import AddItemComponent from '../../components/item/AddItemComponent'

const addItem = () =>{
    const [userId, setUserId] = useState<string>('dfassf')
    const [n, setN] = useState<number>(10)

    const [ifSell, setifSell] = useState<boolean>(true);
    const [extension, setExtension] = useState<boolean>(true)

    const [agreed, setAgreed] = useState<Array<boolean>>([false,false])
    const [allAgreed, setAllAgreed] = useState<boolean>(false)

    const [file, setFile] = useState<string>('') // -> 바꿔야 함
    const [price, setPrice] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [aucPrice, setAucPrice] = useState<number>()
    const [aucTime, setAucTime] = useState<any>('')
    
    function handleTxtChange(e:any, item:string){
        let {value} = e.target

        if(item == "file"){
            setFile(value)
        } else if(item == "price"){
            if(isNaN(value)!==false){
                alert('숫자만 입력해주세요.')
                // 이유는 알 수 없으나 value로 하면 문자 입력 시 값이 들어가서
                // e.target.value로 설정
                e.target.value=price
            }else {
            setPrice(value)
            }
        } else if(item == "name"){
            setName(value)
        } else if(item == "desc"){
            setDesc(value)
        } else if(item == "aucPrice"){
            if(isNaN(value)!==false){
                alert('숫자만 입력해주세요.')
                // 이유는 알 수 없으나 value로 하면 문자 입력 시 값이 들어가서
                // e.target.value로 설정
                e.target.value=price
            }
            setAucPrice(value)
        } else if(item == "aucTime"){
            setAucTime(value)
        }
    }

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

    const handleConfirm = () => {
        if(allAgreed === false){ //미동의시
            alert('모든 항목에 동의해주세요.')
            return false
        }
        else if((ifSell === true &&
                (
                // file==='' &&
               name=='' || desc=='')) ||
                (ifSell === false &&
                (
                // file==='' ||
                name=='' ||desc=='' ||aucPrice==undefined ||aucTime==''))
            ){
                alert('모든 칸을 입력해주세요.')
                return false
        } else{
            return true
        }
    }

    function handleSubmit(){ 
        // axios같은거로 나중에 처리
        console.log(file, price, name, desc)
        console.log(file, name, desc, aucPrice, aucTime, extension)
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
        //input onChange 위함
        handleTxtChange = {handleTxtChange}
        handleSubmit = {handleSubmit}
        handleConfirm = {handleConfirm}
        />

    )
}

export default addItem
