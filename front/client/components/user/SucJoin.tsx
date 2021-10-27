import ModalForm from "../common/ModalForm";
import ModalBackground from "../common/ModalBackground";
import Styled from 'styled-components'
import Link from 'next/link'
import LoginForm from '../common/login/LoginForm';
import React, { useState, useEffect, useLayoutEffect } from 'react';

const SucJoin = (props) => {


    return(
        <SizeWrapper>
            <ModalBackground>
            <ModalForm>
                    <div><p>회원가입이 완료 되었습니다.</p></div>
                    <div>AzitGallery 회원가입을 환영합니다.<br/><br/></div>
                    <div>
                        <span>로그인</span>
                        <span><Link href="/"><a>메인</a></Link></span>
                    </div>
                </ModalForm>
            </ModalBackground>
        </SizeWrapper>
    )
}

export default SucJoin

const SizeWrapper = Styled.div`
    margin-left:-175px;
    margin-top:-99px;
    
`