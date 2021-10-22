import Styled from 'styled-components'
import React,{useEffect} from 'react'

const User = () => {
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);
    return(
        <UserWrapper>
            <div>
                <p>나의 프로필</p>
                <span>이미지</span>
                <ul>
                    <li>
                        <p>닉네임</p>
                        <p>{/*nickname*/}</p>
                    </li>
                    <li>
                        <p>지갑주소</p>
                        <p>{/*wallet account*/}</p>
                    </li>
                    <li>
                        <p>이메일주소</p>
                        <p>{/*email account*/}</p>
                    </li>
                    <li>판매 신청</li>
                    <li>
                        <span>프로필편집</span>
                        <span>회원탈퇴</span>
                    </li>
                </ul>
            </div>        
        </UserWrapper>
    )
}

export default User

const UserWrapper = Styled.div`
    width:100%;
    height:100vh;
    div {
        display:block;

    }


`