import React,{useState} from 'react'
import Styled from 'styled-components'
import ModalForm from '../common/ModalForm'
import ModalBackground from '../common/ModalBackground'
import Link from 'next/link'

const SucNft = (props)=>{
    return(
                <ModalForm>
                    <div><p>NFT 발행이 완료되었습니다.</p></div>
                    <div>발행한 NFT를 지금 바로 확인해보세요<br/>오늘 발행 가능한 NFT 9개 남음</div>
                    <div>
                        <span><Link href="/item/additem"><a onClick={props.test}>새NFT발행</a></Link></span>
                        <span id="rightBtn" ><Link href="/user/mynftall"><a>NFT확인</a></Link></span>
                    </div>
                </ModalForm>
  

    )
}

export default SucNft

const SizeWrapper = Styled.div`
    margin-left:-175px;
    margin-top:-99px;

    
`
