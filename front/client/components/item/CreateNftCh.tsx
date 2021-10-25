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
        <SizeWrapper>
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
                        <span onClick={()=>{openSucNftBtn()}}>예</span>
                    </div>
                    </ModalForm>
                }  
               
            </ModalBackground>
        </SizeWrapper>


    )
}

export default CreateNftCh

const SizeWrapper = Styled.div`
    margin-left:-175px;
    margin-top:-99px;
    span a{
        background-color:#e1f0ff;   
        color:#1e73fa;
        font-weight:500;
    }
    #rightBtn a{
        background-color:#1e73fa;
        color:#e1f0ff;   
        font-weight:500;
        
    }


`