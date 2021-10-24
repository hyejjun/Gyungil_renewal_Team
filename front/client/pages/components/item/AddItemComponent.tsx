import Styled from 'styled-components';
import React, { useState } from "react";
import { Cancel } from '@mui/icons-material';


const AddItemComponent = () => {

    // 임의의 값으로 추후 설정요
    const loggedInUser:string = 'dfassf'
    const n:number = 10

    return(
        <>
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
                        <SmallTitle>
                            배경색
                        </SmallTitle>
                        <DescText>
                            NFT 배경색을 선택해주세요. 아래 컬러칩을 눌러 색을 지정하거나, 컬러 코드를 직접 입력할 수 있습니다.
                        </DescText>
                        <SectionWrapper>
                            <ColorPalette/>
                            <ColorInputBox/>
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
                        <SmallerTextDesc>Created by {loggedInUser}</SmallerTextDesc>
                        <ProfileImg>{/* 프로필 이미지*/}</ProfileImg>
                    </PreviewBottomWrapper>
                    <DescText>
                        * 영상을 업로드한 경우, 이미지에 마우스를 가져다 대면 영상 미리보기로 변경됩니다.
                    </DescText>
                </RightWrapper>
            </TopWrapper>
            <SectionWrapper>
                <Line/>
                <SmallerTitle>
                <input type="checkbox"/> 
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
                <SmallerTitle>
                    <input type="checkbox"/> 
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
                        4. 본인은 NFT에 부적절한 이미지나 영상이 포함될 경우 고지 없이 삭제될 수 있음을 인지하며 이에 동의합니다.
                    </p>
                </TextItemWrapper>
            </SectionWrapper>
            <BottomBtnWrapper>
                <LeftBtn>취소</LeftBtn>
                <RightBtn>NFT 발행하기<br/>(오늘{n}개 발행 가능)</RightBtn>
            </BottomBtnWrapper>
        </>
    )
}

export default AddItemComponent


const TopWrapper = Styled.div`
        display: flex;
    `

const LeftWrapper = Styled.div`
width:700px;
margin-right: 65px;
`

const RightWrapper = Styled.div`
width:300px;
margin-left:65px;
`

const SectionWrapper = Styled.div`
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

const BigTitle = Styled.h3`
    font-size:42px;
`

const SmallTitle = Styled.h4`
    margin-top: 30px;
    font-size:24px;
    margin-bottom:20px;
`

const SmallerTitle = Styled.h5`
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

const ColorInputBox = Styled.input`
    width: 560px;
    height: 30px;
    font-size: 25px;
`

const ColorPalette = Styled.input.attrs({type:'color'})`
width: 100px;
height: 30px;
margin-right: 30px;
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

const BottomBtnWrapper = Styled.div`
    display: block;
    margin-bottom: 50px;
    width:1150px;
    height: 100px;
    background-color: lightpink;
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
    left: 45%; 
    top: 50%;
    transform: translate(-50%, -50%);
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
    left: 55%; 
    top: 50%;
    transform: translate(-50%, -50%);
`