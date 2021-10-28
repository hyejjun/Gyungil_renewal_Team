import React, { useEffect, useState } from "react"
import AddItemComponent from '../../components/item/AddItemComponent'

const addItem = () =>{
    const [n, setN] = useState<number>(10)

    const [ifSell, setifSell] = useState<boolean>(true);
    const [extension, setExtension] = useState<boolean>(true)

    const [agreed, setAgreed] = useState<Array<boolean>>([false,false])
    const [allAgreed, setAllAgreed] = useState<boolean>(false)

    const [file, setFile] = useState<Array<string>>([])
    const [fileBase, setFileBase] = useState<Array<string>>([])
    const [currency, setCurrency] = useState<string>('won')
    const [price, setPrice] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [aucPrice, setAucPrice] = useState<string>('')
    const [aucTime, setAucTime] = useState<any>('')

    function handleTxtChange(e:any, item:string){
        let {value} = e.target
        if(item == "file"){
            setFile(value)
        } else if(item == "price"){
            if(isNaN(value)!==false){
                alert('숫자만 입력해주세요.')
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
                e.target.value=price
            }
            setAucPrice(value)
        } else if(item == "aucTime"){
            if(new Date(value)>new Date()){
                setAucTime(value)
            } else{
                alert('현재보다 과거의 시간으로 설정할 수 없습니다.')
                e.target.value = aucTime
            }
        }
    }

    const fileChange = (e) => {
        let {files} = e.target
        if(files.length+file.length>10){ //추후 수정
            alert('한 번에 올릴 수 있는 파일 갯수는 최대 10개입니다.')
        } else{
            for(let i=0;i<files.length;i++){
                if (files[i]) {
                    setFile(newFile => [...newFile, files[i]])
                    let reader = new FileReader()
                    reader.readAsDataURL(files[i])
                    reader.onloadend = () => {
                        const base64 = reader.result
                        if (base64) {
                            let base64Sub = base64.toString()
                            setFileBase(imgBase64 => [...imgBase64, base64Sub])
                        }
                    }
                }
            }
        }
    }

    function deleteFile(key){
        if(confirm('정말 삭제하시겠습니까?')){
            let newFileArray = [...file]
            let newFileBaseArray = [...fileBase]
            newFileArray.splice(key,1)
            newFileBaseArray.splice(key,1)
            setFile(newFileArray)
            setFileBase(newFileBaseArray)
        } else{
            console.log('취소')
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

    const handleCurrency = (e) => {
        let {value} = e.target
            setCurrency(value)
    }

    const handleConfirm = () => {
        if(agreed[0] !== true || agreed[1] !== true){ //미동의시
            alert('모든 항목에 동의해주세요.')
            return false
        }
        else if((ifSell === true &&
                (name=='' || desc=='' || price == '')) ||
                (ifSell === false &&
                (name=='' ||desc=='' ||aucPrice=='' ||aucTime==''))){
                alert('모든 칸을 입력해주세요.')
                return false
        } else if(file.length == 0 ){
                alert('파일을 첨부해주세요.')
                return false
        }else{
                return true
        }
    }

    const handleSubmit = () => { 
        // axios같은거로 나중에 처리
        console.log(file, price, currency, name, desc)
        console.log(file, name, desc, aucPrice, currency, aucTime, extension)
    }

    const resetState = () => {
        window.location.reload() 
    }


    return(
        <AddItemComponent 
        // 상품 등록 페이지
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
        fileChange = {fileChange}
        fileBase = {fileBase}
        handleCurrency = {handleCurrency}
        deleteFile = {deleteFile}
        // 발행 후 초기화
        resetState = {resetState}
        />

    )
}

export default addItem
