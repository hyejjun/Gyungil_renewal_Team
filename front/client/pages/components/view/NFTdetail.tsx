// view 페이지에서 NFT 설명 넣는 곳
import Styled from 'styled-components'

const NFTdetail = () => {
    return (
        <>
            <NFTdetailWrap>
                <NFTTitle>
                    <span>NFT 제목</span>
                    <span>하트 버튼</span>
                </NFTTitle>
                <NFTExplain>
                    <p>설명</p>
                    <div>
                        상세 설명
                    </div>
                </NFTExplain>
                <NFTHistory>
                    <p>히스토리</p>
                    <table>
                        <thead>
                            <tr>
                                <td>구분</td>
                                <td>시간</td>
                                <td>보낸 사람</td>
                                <td>받은 사람</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>신규 발행</td>
                                <td>가라</td>
                                <td>가라</td>
                                <td>가라</td>
                            </tr>
                        </tbody>
                    </table>
                </NFTHistory>
            </NFTdetailWrap>
        </>
    )
}
export default NFTdetail

const NFTdetailWrap = Styled.div`
    width : 100%;
    height : auto;
    margin-top: 5%;
`

const NFTTitle = Styled.div`
    height: 150px;
    background: darkgrey;
    padding: 3% 0;
    box-sizing: border-box;
    display : flex;

    & > span :nth-child(1){
        color: #2d3741;
        font-weight: 700;
        font-size: 48px;
        line-height: 64px;
        width: 70%;
        word-break: break-all;
    }
    & > span :nth-child(2){
        width: 30%;
        background: tan;
    }
`

const NFTExplain = Styled.div`
    height: 100px;
    background: #ebd4ba;
    
`

const NFTHistory = Styled.div`
    
`

