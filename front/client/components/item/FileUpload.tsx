import Styled from 'styled-components';
import React from "react";

const FileUpload = ({fileChange, fileBase, deleteFile}) =>{
    return(
        <>
            <SmallTitle>
                파일 업로드
            </SmallTitle>
            <DescText>
                NFT에 넣을 이미지/영상 파일을 업로드해 주세요. 최대 10MB까지 업로드할 수 있으며, 지원하는 파일 포맷은 아래와 같습니다. <br/>
                - 이미지: PNG, JPEG, GIF, WEBP (가로 세로 사이즈 600px 이상) <br/>
            </DescText>
            <UploadWrapper>
                <BlueButton htmlFor = "fileUp">파일 선택</BlueButton>
                <input type = "file" id = "fileUp" 
                onChange = {fileChange.bind(this)} 
                accept="image/*"
                multiple></input>
            </UploadWrapper>
            <PrevWrapper>
                {fileBase.map((item, key) => {
                    return(
                        <ImageContent key = {key}>
                            <img
                                src={item}
                                // alt="First slide"
                            />
                            <CloseButton
                                onClick = {()=>{deleteFile(key)}}
                            >&#10006;</CloseButton>
                        </ImageContent>
                    )
                })}
            </PrevWrapper>
        </>
    )
}

const SmallTitle = Styled.h4`
    margin-top: 30px;
    font-size:24px;
    margin-bottom:20px;
`

const DescText = Styled.div`
    color:gray;
    font-size:16px;
`

const UploadWrapper = Styled.div`
    margin-top: 20px;
    height:50px;
    width: 50px;
    padding: auto;
    position: relative;
    input{
        display: none;
    }
`

const BlueButton = Styled.label`   
    background-color: #055fec;
    border-radius:5px;
    width: 100px;
    height: 40px;
    position:absolute;
    left: 0%;
    top: 10%;
    border: none;
    outline: none;
    color: white;   
    cursor: pointer;
    text-align: center;
    line-height: 40px;
`

const PrevWrapper = Styled.div`
    width: 850px;
    height: 85px;
    margin-top: 20px;
    margin-bottom: 20px;
    /* border: solid 1px black; */
`

const ImageContent = Styled.div`
    /* border: solid 1px black; */
    width: 80px;
    float: left;
    margin-right: 5px;
    img{
        width: 70px;
        height: 70px;
        margin: 5px;
    }
    position: relative;
`

const CloseButton = Styled.div`
    position: absolute;
    right: -5px;
    top: -5px;
    width: 20px;
    height:20px;
    border-radius: 10px;
    background-color:white;
    padding-left:4px;
    line-height:23px;
    box-sizing: border-box;
    cursor: pointer;
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    opacity: 0.6;
`


export default FileUpload
