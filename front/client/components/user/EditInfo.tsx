import Styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const EditInfo = () => {
    return(
        <>
            <EditInfoWrapper>
                <div>프로필편집</div>
                <div>
                    <span><AccountCircleIcon/></span>
                    <span>
                        <ul>
                            <li>
                                <span>닉네임</span>
                                <span>* 5~20자의 한글, 영문 대소문자, 숫자, 특수기호(_),(-),(.)만 사용 가능합니다.</span>
                            </li>
                            <li>mihee</li>
                            <br/>
                            <li><span>이메일주소</span></li>
                            <li>algml9603@gmail.com</li>
                        </ul>
                    </span>
                </div>
                <div>
                    <button>취소</button>
                    <button>변경사항저장</button>
                </div>

            </EditInfoWrapper>
        </>
    )
}

export default EditInfo


const EditInfoWrapper = Styled.div`
    width:750x;
    max-width: 1304px;
    height:750px;
    padding-right: 12px;
    padding-left: 150px;
    box-sizing:border-box;
    display: block;
    justify-content:center
    font-size:14px;
    color: rgba(45,55,65,.7);
    font-weight: 400;
    line-height: 1.75;
    text-align: left;
    margin-top:100px;
    div:nth-child(1){
        display: flex;
        font-size: 36px;
        font-weight: 700;
        line-height: 48px;
        color: #2d3741;
        vertical-align: bottom;
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
        height:237px;
        padding-left:56px;
        margin-top:30px;
        box-sizing:border-box;
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
        border:1px solid rgba(20, 30, 40, 0.1);
        padding-left:10px;
    }
    div:nth-child(3){
        margin-top:40px;
        text-align:center;
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
        color: #1e73fa
    }
    div button:nth-child(2){
        color: #e1f0ff;
        background-color: #1e73fa
    }
`
