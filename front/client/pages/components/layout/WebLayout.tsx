import Styled from "styled-components"
import MenuBar from '../common/MenuBar'

const WebLayout = ({ children }) => {
    return (
        <>
            <WebWrap>
                <MenuBar />
                <WebInnerWrap>
                    <WebHeight>
                        {children}
                    </WebHeight>
                </WebInnerWrap>
            </WebWrap>
        </>
    )
}

export default WebLayout


const WebWrap = Styled.div`
    width : 100%;
    height: auto;
    overflow: hidden;
`

const WebInnerWrap = Styled.div`
    width : 1200px;
    height: 100vh;
    margin : 0 auto;
    background : white;
`

const WebHeight = Styled.div`
    width: 100%;
    height: 100%;
    padding: 1vw;
    box-sizing: border-box;
`

/* web ver 1200 margin 0 auto */