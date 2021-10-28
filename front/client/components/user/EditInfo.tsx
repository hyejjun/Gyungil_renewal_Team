import Styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import { TextField } from '@mui/material';
import Router from 'next/router';

const EditInfo = () => {
    // @ useSelector 로 닉네임과 이메일 가져옴
    // const user:State = useSelector((state:RootState) => state.user); 이런식으로
    // 가라데이터
    const currentNickName = '안녕'
    const currentEmail = 'hello@gmail.com'

    // @ 닉네임
    const [nickName, setNickname] = useInput(currentNickName)

    // @ 이메일
    const [email, setEmail] = useInput(currentEmail)

    // @ 수정된 닉네임과 이메일
    const modifiedMyData = {
        nickName,
        email
    }
    // @ 변경사항 저장
    const editMypage = () => {
        // 여기서 dispatch 보내고
        alert('수정 되었습니다')
        Router.push('/user/user')
    }


    return (
        <>
            <EditInfoWrapper>
                <div>프로필편집</div>
                <div>
                    <span><AccountCircleIcon /></span>
                    <span>
                        <ul>
                            <li>
                                <span>닉네임</span>
                                <span>* 5~20자의 한글, 영문 대소문자, 숫자, 특수기호(_),(-),(.)만 사용 가능합니다.</span>
                            </li>
                            <li>
                                <TextField value={nickName} onChange={setNickname} />
                            </li>
                            <br />
                            <li><span>이메일주소</span></li>
                            <li>
                                <TextField value={email} onChange={setEmail} />
                            </li>
                        </ul>
                    </span>
                </div>
                <div>
                    <button>취소</button>
                    <button onClick={editMypage}>변경사항저장</button>
                </div>

            </EditInfoWrapper>
        </>
    )
}

export default EditInfo


const EditInfoWrapper = Styled.div`
    width:1200px;
    height:700px;
    box-sizing:border-box;
    justify-content:center;
    font-size:14px;
    color: rgba(45,55,65,.7);
    font-weight: 400;
    line-height: 1.75;


    div:nth-child(1){
        display: flex;
        vertical-align: bottom;
        font-size : 19px;
    }
    div:nth-child(2) svg{
        width:140px;
        height:140px;
        cursor: pointer;
        overflow: hidden;
        margin-right:64px;
    }
    div:nth-child(2){
        display:flex;
        width:1200px;
        height: auto;
        margin-top:30px;
        box-sizing:border-box;
        padding: 0 13%;
    }
    div:nth-child(2)>span>ul>li>span:nth-child(1){
        display: table-cell;
        font-weight: 700;
        font-size: 20px;
        color: #2d3741;
        vertical-align: middle;
    }
    div:nth-child(2)>span>ul>li:nth-child(1)>span:nth-child(1){
        float:left;
        margin-right:80px;
    }
    div:nth-child(2)>span>ul>li:nth-child(1)>span:nth-child(2){
        font-size:14px;
    }
    div li{
        line-height:40px;
    }
    div li:nth-child(2), div li:nth-child(5){
        margin-top:15px;
        padding-left:10px;
    }
    div:nth-child(3){
        width: 1200px;
        text-align: right;
        padding: 20% 5% 0 0;
        box-sizing: border-box;
    }
    div button{
        box-sizing:border-box;
        border:1px solid #e1f0ff;
        border-radius: .25rem;
        padding: 12px 24px;
        height: 50px;
        display: inline-block;
        margin-right:10px;
        font-weight: 700;
        text-align: center;
        vertical-align: middle;
    }
    div button:nth-child(1){
        background-color: #e1f0ff;
        color: #1e73fa;
        cursor : pointer;
    }
    div button:nth-child(2){
        color: #e1f0ff;
        background-color: #1e73fa;
        cursor : pointer;
    }
`
