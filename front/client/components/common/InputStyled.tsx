import Styled from 'styled-components'

const InputStyle = ()=>{
    return(
        <>
            <InputWrap>
                <input type="text" />
            </InputWrap>
        </>
    )
}

export default InputStyle

const InputWrap = Styled.div`
    cursor: text;
    display: flex;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid rgb(229, 232, 235);
    width: 100%;
    padding: 19px;
    box-sizing: border-box;
     
    & > input,
    & > label,
    & > label > input{
        width : 100%;
        font-size: 20px;
        background-color: transparent;
        border: none;
        outline: none;
    }
`