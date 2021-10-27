import Styled from 'styled-components'



const Btn = ({children}) => {
    return(
        <BtnWrapper>
            {children}
        </BtnWrapper>
    )
}

export default Btn

const BtnWrapper = Styled.div`
    background-color:#1e73fa;
    color:white;
    font-weight:500;
    width:120px;
    height:40px;
    border-radius:3%;
    line-height:40px;
    vertical-align:middle;
    text-align:center;
    margin:auto auto 20px auto;



`