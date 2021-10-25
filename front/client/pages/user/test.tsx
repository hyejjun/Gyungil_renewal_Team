import Btn from "../../components/common/Btn"


const test = () => {
    return(
        <Btn>
                <div><p>로그인이 필요합니다.</p></div>
                <div><p>계속하려면 로그인을 해주세요</p></div>
                <div>
                    <span>취소</span>
                    <span>로그인</span>
                </div>
        </Btn>
    )
}

export default test