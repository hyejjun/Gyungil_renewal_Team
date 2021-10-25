import Styled from 'styled-components'

const MyNFTDelOrSell = ({children}) => {
    return (
        <>
            <MyNFTDelSellWrapper>
                {children}
            </MyNFTDelSellWrapper>
        </>
    )
}
export default MyNFTDelOrSell

const MyNFTDelSellWrapper = Styled.div`
    weight:100%;
    box-sizing:border-box;
    min-height : 100px;
    display:flex;
    margin-top:5px;
    margin-left:80px;
    button{
        width:100px;
        height:50px;
        margin-left:-200px;
        margin-top:10px;
        border:1px solid rgba(20, 30, 40, 0.5);
        border-radius:3%;
        background-color:#f2f2f2
    }

    div{
        width:90%;
        justify-content:space-between;
        display:flex;
        padding:15px 30px;
        border:1px solid rgba(20, 30, 40, 0.2);
        border-radius:3%;
    }
    div>span>ul>li:nth-child(1){
        font-weight:600;
        color:rgba(20, 30, 40, 0.8);
    }
    div>span>ul>li:nth-child(2){
        font-size:12px;
        margin-top:10px;
        line-height:20px;
    }






`
    

