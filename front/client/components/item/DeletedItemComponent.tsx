import Styled from 'styled-components';
import React from "react";

const DeletedItemComponent = () =>{

    return(
        <>
            <DeletedItemWrapper> 
                <SmallTitle>
                    존재하지 않는 NFT입니다.
                </SmallTitle>
                <DescText>
                    존재하지 않거나 삭제되어 NFT 정보를 확인할 수 없습니다.
                </DescText>
                <BlueButton>홈으로</BlueButton>
            </DeletedItemWrapper>
        </>
    )
}

const DeletedItemWrapper = Styled.div`
    width: 600px;
    height: 400px;
    margin: 0 auto;
    text-align: center;
    padding-top: 100px;
    box-sizing: border-box;
`

const SmallTitle = Styled.h4`
    margin-top: 30px;
    font-size:24px;
    margin-bottom:20px;
`

const DescText = Styled.div`
    color:gray;
    font-size:16px;
`

const BlueButton = Styled.button`   
    background-color: #055fec;
    border-radius:5px;
    width: 120px;
    height: 60px;
    margin-top: 40px;
    border: none;
    outline: none;
    color: white;   
    cursor: pointer;
`

export default DeletedItemComponent
