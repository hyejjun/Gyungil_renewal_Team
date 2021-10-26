import Styled from 'styled-components'
import ModalForm from '../common/ModalForm'
import ModalBackground from '../common/ModalBackground'
import Link from 'next/link'

const CancelNft = (props)=>{
    return(
        <>
            <ModalBackground>
                <ModalForm>
                    <div><p>NFT 발행을 취소할까요?</p></div>
                    <div>입력한 정보는 따로 저장되지 않습니다.<br/><br/></div>
                    <div>
                        <span onClick={props.closeBtn}>아니요</span>
                        <span><Link href="/"><a>예</a></Link></span>
                    </div>
                </ModalForm>
            </ModalBackground>
        </>
    )
}

export default CancelNft

