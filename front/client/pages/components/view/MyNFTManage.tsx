import Styled from 'styled-components'
import MyNFTDelOrSell from './MyNFTDelOrSell'

const MyNFTManage = () => {
    return (
        <>
            <MyNFTManageWrapper>
                <p>NFT 관리</p>
                <MyNFTDelOrSell>
                    <div>           
                        <span>
                            <ul>
                                <li>NFT 삭제</li>
                                <li>해당 NFT를 삭제할 수 있습니다. <br/> 삭제 요청이 완료되면 취소할 수 없으니 주의하기 바랍니다.</li>
                            </ul>
                        </span>
                        <span>
                            <button>삭제하기</button>
                        </span>
                    </div>
                </MyNFTDelOrSell>        
                <MyNFTDelOrSell>
                    <div>           
                        <span>
                            <ul>
                                <li>NFT 판매</li>
                                <li>해당 NFT를 판매할 수 있습니다. <br/> 판메 요청이 승인되면 거래가 시작되오니 주의하기 바랍니다.</li>
                            </ul>
                        </span>
                        <span>
                            <button>판매하기</button>
                        </span>
                    </div>
                </MyNFTDelOrSell>         
            </MyNFTManageWrapper>
        </>
    )
}
export default MyNFTManage

const MyNFTManageWrapper = Styled.div`
    width : 100%;
    height : auto;
    padding: 2% 0;
    box-sizing: border-box;
    min-height : 100px;
    display: flex;
    flex-direction:column;
    border-top: 1px solid rgba(20, 30, 40, 0.1);
    & > p{
        height: 40px;
        font-weight: 700;
        font-size: 20px;
        color: #2d3741;
        vertical-align: middle;
    }

`
    

