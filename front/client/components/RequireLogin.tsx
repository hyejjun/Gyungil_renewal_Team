import Link from 'next/link';
import Styled from 'styled-components';
import Router from 'next/router';
import ModalBackground from './common/ModalBackground';
import ModalForm from './common/ModalForm';



const RequireLogin = (props) => {
    return(
        <ModalBackground>            
            <ModalForm>
                <div><p>로그인이 필요합니다.</p></div>
                <div><p>계속하려면 로그인을 해주세요</p></div>
                <div>
                    <span onClick={props.openBtn}>취소</span>
                    <span onClick={props.loginOpenBtn}>로그인</span>
                </div>
            </ModalForm>            
        </ModalBackground>
    )
}

export default RequireLogin

