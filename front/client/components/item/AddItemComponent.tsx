import Styled from 'styled-components';
import React, { useState } from "react";
import SellType from './SellType';
import Agreement from './Agreement';
import CreateNftCh from './CreateNftCh';
import CancelNft from './CancelNft';

const AddItemComponent = ({
    userId, n, ifSell, extension, 
    sellToggle, extensionToggle,
    agreed, agreeed, ifAgreed
}) => {

    // 임의의 값으로 추후 설정요
    useState<boolean>(false);

    const [nftCreateState,setnftCreateState] = useState<boolean>(false);
    const createNftCh = () => {
        setnftCreateState(prev=>!prev)
    }
    const [cancelNft,setcancelNft] = useState<boolean>(false);
    const cancelNftCh = () => {
        setcancelNft(prev=>!prev)
    }
    const closeBtn = () => {
        setcancelNft(false);
        setnftCreateState(false);
    }
    


    return(
        <>
            {nftCreateState ? < CreateNftCh flag={nftCreateState} closeBtn={closeBtn}/> :<></> }
            {cancelNft ? < CancelNft flag={cancelNft} closeBtn={closeBtn}/> :<></>}
            <TopWrapper>
                <LeftWrapper> 
                    <BigTitle>
                        새로운 NFT 발행하기
                    </BigTitle>
                    <SectionWrapper>

                        <SmallTitle>
                            파일 업로드
                        </SmallTitle>
                        <DescText>
                            NFT에 넣을 이미지/영상 파일을 업로드해 주세요. 최대 10MB까지 업로드할 수 있으며, 지원하는 파일 포맷은 아래와 같습니다. <br/>
                            - 이미지: PNG, JPEG, GIF, WEBP (가로 세로 사이즈 600px 이상) <br/>
                            -영상: MP4(가로 세로 사이즈 600px 이상) <br/>
                        </DescText>
                        <UploadWrapper>
                            <BlueButton>파일 선택</BlueButton>
                        </UploadWrapper>

                    </SectionWrapper>
                    <SectionWrapper>
                        <SectionWrapper>
                            <SmallTitle>
                                즉시 판매/ 경매
                            </SmallTitle>
                            <DescText>
                                판매 유형을 선택해주세요. 
                            </DescText>
                            <SellType 
                                ifSell = {ifSell} 
                                extension = {extension}
                                sellToggle = {sellToggle}
                                extensionToggle = {extensionToggle}
                            />
                        </SectionWrapper>
                    </SectionWrapper>
                    <SectionWrapper>
                        <SmallTitle>
                            이름
                        </SmallTitle>
                        <InputBox/>
                    </SectionWrapper>
                    <SectionWrapper>
                        <SmallTitle>
                            설명
                        </SmallTitle>
                        <TextBox />
                    </SectionWrapper>
                </LeftWrapper>
                <RightWrapper>  
                        <SmallTitle>
                            미리보기
                        </SmallTitle>
                        <PreviewWrappper>
                            <PreviewContent/>
                        </PreviewWrappper>
                        <PreviewBottomWrapper>
                            <PreviewBottomTitle>NFT 이름</PreviewBottomTitle>
                            <SmallerTextDesc>Created by {userId}</SmallerTextDesc>
                            <ProfileImg>{/* 프로필 이미지*/}</ProfileImg>
                        </PreviewBottomWrapper>
                        <DescText>
                            * 영상을 업로드한 경우, 이미지에 마우스를 가져다 대면 영상 미리보기로 변경됩니다.
                        </DescText>
                    </RightWrapper>
            </TopWrapper>
            <Agreement
            agreed = {agreed}
            agreeed = {agreeed}
            ifAgreed = {ifAgreed}
            />
            <BottomBtnWrapper>
            
                <LeftBtn onClick={()=>{cancelNftCh()}}>취소</LeftBtn>
                <RightBtn onClick={()=>{createNftCh()}}>NFT 발행하기<br/>(오늘{n}개 발행 가능)</RightBtn>
            </BottomBtnWrapper>
            
            
            
        </>
    )
}

export default AddItemComponent


const TopWrapper = Styled.div` //
        display: flex;
    `

const LeftWrapper = Styled.div` //
width:700px;
margin-right: 65px;
`

const RightWrapper = Styled.div`
width:300px;
margin-left:65px;
`

const SectionWrapper = Styled.div` //
    margin-bottom: 50px;
    display: block;
`

const UploadWrapper = Styled.div`
    margin-top: 20px;
    height:200px;
    border: dashed 3px gray;
    padding: auto;
    position: relative;
`

const BigTitle = Styled.h3` //
    font-size:42px;
`

const SmallTitle = Styled.h4` //
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
    width: 100px;
    height: 40px;
    position:absolute;
    left: 50%;
    top: 50%;
    border: none;
    outline: none;
    color: white;   
    transform:translate(-50%, -50%);
    cursor: pointer;
`

const PreviewWrappper = Styled.div`
    width:300px;
    height:300px;
    background-color: #dbe5f0;
    border-radius: 10px 10px 0 0;
    box-shadow: 1px 2px 3px gray;
    margin-bottom: 2px;
    position:relative;
`

const PreviewContent = Styled.div`
    width:240px;
    height:240px;
    background-color: white;
    position:absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
`

const PreviewBottomWrapper = Styled.div`
    border-radius: 0 0 10px 10px;
    position: relative;
    background-color: white;
    height: 100px;
    padding: 20px;
    box-shadow: 1px 3px 3px lightgray;
    box-sizing: border-box;
    margin-bottom: 20px;
`

const PreviewBottomTitle = Styled.div`
    font-size:24px;
    margin-top: 10px;
    display: block;
`

const SmallerTextDesc = Styled.div`
    font-size: 16px;
    color: gray;
`

const ProfileImg = Styled.div`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color:#dbe5f0;
`


const InputBox = Styled.input`
    width: 690px;
    height: 30px;
    font-size: 25px;
`

const TextBox = Styled.textarea`
width:690px;
height: 200px;
`

const BottomBtnWrapper = Styled.div`
    display: block;
    margin-bottom: 50px;
    width:1150px;
    height: 100px;
    position: relative;
`

const LeftBtn = Styled.button`   
    background-color: #e1f0fe;
    border-radius:5px;
    width: 100px;
    height: 60px;
    border: none;
    outline: none;
    color: #055fec;   
    position: absolute;
    left: 43%; 
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`

const RightBtn = Styled.button`   
    background-color: #055fec;
    border-radius:5px;
    width: 150px;
    height: 60px;
    border: none;
    outline: none;
    color: white;   
    position: absolute;
    left: 56%; 
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`