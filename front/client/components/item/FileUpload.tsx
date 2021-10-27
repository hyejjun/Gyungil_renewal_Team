import Styled from 'styled-components';
import React from "react";

const FileUpload = ({fileChange}) =>{

    
    return(
        <UploadWrapper>
            <BlueButton htmlFor = "fileUp">파일 선택</BlueButton>
            <input type = "file" id = "fileUp" 
            onChange = {fileChange.bind(this)} 
            accept="image/*"
            multiple></input>
        </UploadWrapper>
    )
}

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


export default FileUpload
