import Styled from 'styled-components'
import React, { useState } from "react"
import SellType from './SellType'
import Agreement from './Agreement'
import CreateNftCh from './CreateNftCh'
import CancelNft from './CancelNft'
import FileUpload from './FileUpload'

const AddItemComponent = ({
    n, ifSell, extension, 
    sellToggle, extensionToggle,
    ifAgreed,
    handleTxtChange, handleSubmit, handleConfirm,
    fileChange, fileBase, handleCurrency
}) => {
    const [nftCreateState,setnftCreateState] = useState<boolean>(false);
    const createNftCh = () => {
        if(handleConfirm() === true){
            setnftCreateState(prev=>!prev)
        } 
    }
    const [cancelNft,setcancelNft] = useState<boolean>(false);
    const cancelNftCh = () => {
        setcancelNft(prev=>!prev)
    }
    const closeBtn = () => {
        setcancelNft(false)
        setnftCreateState(false)
    }
    
    return(
        <>
            {nftCreateState ? < CreateNftCh flag={nftCreateState} closeBtn={closeBtn} handleSubmit = {handleSubmit}/> :<></> }
            {cancelNft ? < CancelNft flag={cancelNft} closeBtn={closeBtn}/> :<></>}
                <TopWrapper> 
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
                            {/* -영상: MP4(가로 세로 사이즈 600px 이상) <br/> 사진만 올릴 예정 */}
                        </DescText>
                        <FileUpload fileChange = {fileChange}/>
                        <PreviewDiv>
                        {fileBase.map((item, key) => {
                            return(
                                <img
                                    className="d-block w-100"
                                    src={item}
                                    alt="First slide"
                                    // style={{width:"100%",height:"550px"}}
                                    key={key}
                                />
                            )
                        }) }
                        </PreviewDiv>
                    </SectionWrapper>
                    <SectionWrapper>
                        <SectionWrapper>
                            <SmallTitle>
                                즉시 판매 / 경매
                            </SmallTitle>
                            <DescText>
                                판매 유형을 선택해주세요. 
                            </DescText>
                            <SellType 
                                ifSell = {ifSell} 
                                extension = {extension}
                                sellToggle = {sellToggle}
                                extensionToggle = {extensionToggle}
                                handleTxtChange = {handleTxtChange}
                                handleCurrency = {handleCurrency}
                            />
                        </SectionWrapper>
                    </SectionWrapper>
                    <SectionWrapper>
                        <SmallTitle>
                            이름
                        </SmallTitle>
                        <InputBox
                            onChange = {(e)=>handleTxtChange(e,"name")}
                        />
                    </SectionWrapper>
                    <SectionWrapper>
                        <SmallTitle>
                            설명
                        </SmallTitle>
                        <TextBox
                         onChange = {(e)=>handleTxtChange(e, "desc")}
                        />
                    </SectionWrapper>
                </TopWrapper>
            <Agreement
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

const TopWrapper = Styled.div`
    width: 1000px;
    margin: 0 auto;
`

const SectionWrapper = Styled.div`
    margin-bottom: 50px;
    display: block;
`

const BigTitle = Styled.h3`
    font-size:42px;
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

const PreviewDiv = Styled.div`
    width: 750px;
    height: 70px;
    margin-top: 20px;
    margin-bottom: 20px;
    img{
        width: 65px;
        height: 65px;
        margin-left: 5px;
        margin-right: 5px;
    }
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