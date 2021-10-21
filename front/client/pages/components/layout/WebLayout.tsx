import Styled from "styled-components"
import MenuBar from '../common/MenuBar'
import Footer from "../common/Footer"
import NeedLogin from "../common/NeedLogin"

const WebLayout = ({ children }) => {
    return (
        <>
            <WebWrap>
                <NeedLogin/>
                <MenuBar />
                <WebInnerWrap>
                    <WebHeight>
                        {children}
                    </WebHeight>
                </WebInnerWrap>
                <Footer/>
            </WebWrap>
        </>
    )
}

export default WebLayout


const WebWrap = Styled.div`
    width : 100%;
    height: auto;
    overflow: hidden;
    background:#FAFAFA;
`

const WebInnerWrap = Styled.div`
    width : 1200px;
    height: auto;
    margin : 0 auto;
    background : #FAFAFA;
`

const WebHeight = Styled.div`
    width: 100%;
    height: 100%;
    padding: 1vw;
    box-sizing: border-box;
`

/* web ver 1200 margin 0 auto */