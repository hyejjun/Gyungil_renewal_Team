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
    width:60px;
    text-align:center;
    padding:13px;
    padding-top:7px;
    margin-bottom:3px;
    line-height:15px;
    border:1px solid #007bff;
    background-color:#007bff;
    border-radius:5%;
    color:#fff;
    margin-left:15px;



`