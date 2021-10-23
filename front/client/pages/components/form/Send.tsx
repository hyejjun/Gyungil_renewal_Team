import React from 'react';
import Styled from 'styled-components';

const SendForm = ({props,children}) => {
    return(
        <SendFormWrapper>
            {children}
        </SendFormWrapper>
    )
}


export default SendForm


const SendFormWrapper = Styled.div`
    width:${props=>props.width||'50px'};
    height:${props=>props.height||'50px'};
    background-color:${props=>props.backgroundColor||'green'}

`