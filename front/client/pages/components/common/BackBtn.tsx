import Router from 'next/router'
import Styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackBtn = () => {
    return (
        <>
            <GoBackWrap>
                <p onClick={() => { Router.back() }}>
                    <ArrowBackIcon />
                </p>
            </GoBackWrap>
        </>
    )
}

export default BackBtn


const GoBackWrap = Styled.div`
    cursor : pointer;
    & > p > svg {
        font-size : 35px;
    }
`