import React, { useState } from "react";
import Styled from 'styled-components'
import ModalForm from '../common/ModalForm'
import ModalBackground from '../common/ModalBackground'
import SucNft from './SucNft'

const CreateNftCh = (props) => {
    const [sucNft,setSucNft] = useState<boolean>(false)
    const openSucNftBtn = () => {
        setSucNft(prev=>!prev)
    }

    return(
        <>
            <ModalBackground>
                {
                    sucNft
                    ?
                    <SucNft flag={sucNft} closeBtn={openSucNftBtn} test={props.closeBtn}/>                    
                    :
                    <ModalForm>
                    <div><p>NFT를 발행하시겠습니까?</p></div>
                    <div>발행하시는 NFT에 대한 <br/> 모든 책임을 본인에게 있습니다.</div>
                    <div>
                        <span onClick={props.closeBtn}>아니요</span>
                        <span onClick={(e)=>{openSucNftBtn(); props.handleSubmit(e)}}>예</span>
                    </div>
                    </ModalForm>
                }                
            </ModalBackground>
        </>


    )
}

export default CreateNftCh
