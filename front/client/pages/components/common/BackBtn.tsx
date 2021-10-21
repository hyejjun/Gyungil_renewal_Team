import Router from 'next/router'
import Styled from 'styled-components';

const BackBtn = () => {
    return (
        <>
            <GoBackWrap>
                <p onClick={() => { Router.back() }}> ← 돌아가기</p>
            </GoBackWrap>
        </>
    )
}

export default BackBtn

const GoBackWrap = Styled.div`
    cursor : pointer;
    @media only screen and (min-width:768px){
        & > p > svg{
            font-size : 40px;
        }
        
    }
`