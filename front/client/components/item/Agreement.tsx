import Styled from 'styled-components';
import React, { useEffect, useState } from "react";

const Agreement = ({ifAgreed}) => {

    return(
        <>
            <SectionWrapper>
                <Line/>
                <SmallerTitle htmlFor = "agreeOne">
                <input type="checkbox" 
                id = "agreeOne" 
                onChange = {()=>ifAgreed(1)}
                /> 
                    본인은 NFT 발행을 위해 아래 정보를 수집 및 이용하는 것에 동의합니다.
                </SmallerTitle>
                <TextItemWrapper>
                    <span>
                        - 수집항목: NFT이름, 설명, 파일(이미지 등)
                    </span>
                    <span>
                        - 보유 및 이용기간: 영구 (규정위반, 요청 시 파기)
                    </span>
                    <span>
                        - 수집목적: NFT 발행 및 관리
                    </span>
                    <span>
                        - 동의를 거부할 경우 NFT를 발행할 수 없습니다.
                    </span>
                </TextItemWrapper>
                <SmallerTitle htmlFor = "agreeTwo">
                    <input type="checkbox" 
                    id = "agreeTwo" 
                    onChange = {()=>ifAgreed(2)}
                    /> 
                    본인은 아래 유의사항을 꼼꼼히 확인하였으며, 이를 준수하는데 동의합니다.
                </SmallerTitle>
                <TextItemWrapper>
                    <p>
                        1. 본인은 제3자의 지적재산권, 인권, 개인정보 등 타인의 권리를 침해하지 않습니다.
                    </p>
                    <p>
                        2. 본인은 본인의 개인정보를 활용하는 경우 본인의 개인정보가 제3자에게 공개, 활용, 제공 등이 될 수 있음을 인지하며 이에 동의합니다.
                    </p>
                    <p>
                        3. 본인은 이용약관 및 운영정책에 반하는 NFT를 발행하지 않으며 발행하는 NFT에 대한 모든 책임은 본인에게 있음을 확인하고 동의합니다.
                    </p>
                    <p>
                        4. 본인은 NFT에 부적절한 이미지가{/*나 영상이*/} 포함될 경우 고지 없이 삭제될 수 있음을 인지하며 이에 동의합니다.
                    </p>
                </TextItemWrapper>
            </SectionWrapper>
        </>
    )
}

export default Agreement

const SectionWrapper = Styled.div`
    margin-bottom: 50px;
    display: block;
`

const SmallerTitle = Styled.label`
    color:#2d3741; 
    font-size:20px;
    display:inline-block;
    text-decoration:none;
    list-style:none;
    margin-top: 80px;
    margin-right:20px;
    float:left;
    input {
        margin-left: 30px;
        margin-right: 20px;
    }
`

const Line = Styled.div`
    width: 1150px;
    height: 2px;
    background: darkgray;
`

const TextItemWrapper = Styled.div`
    background-color: #e1f0fe;
    width: 1150px;
    height: auto;
    padding: 30px;
    margin-top: 120px;
    box-sizing: border-box;
    span{
        width: 400px;
        display: inline-block;
        color:gray;
        font-size:16px;
        margin-bottom: 20px;
    }
    p{
        width: 890px;
        display: flex;
        color:gray;
        font-size:16px;
        margin-bottom: 20px;
    }
`
