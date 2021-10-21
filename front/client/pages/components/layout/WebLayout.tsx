import Styled from "styled-components"
import MenuBar from '../common/MenuBar'

const WebLayout = ({ children }) => {
    return (
        <>
            <WebWrap>
                <WebInnerWrap>
                    <MenuBar />
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
`

const WebHeight = Styled.div`
    width: 100%;
    height: 80vh;
    padding: 3vw;
    box-sizing: border-box;
`

/* web ver 1200 margin 0 auto */