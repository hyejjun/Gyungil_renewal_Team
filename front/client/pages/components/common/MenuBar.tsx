import React,{useState} from 'react';


const MenuBar = () => {
    const [loginState,setLoginState] = useState<string>("login")
    const loginClick = () => {
        
        setLoginState("logout")
    }
    return (
        <>
            <span>logo</span>
            <ul>
                <li>Explorer</li>
                <li>create</li>
                <li onClick={()=>{loginClick()}}>{loginState}</li>
            </ul>
        </>
    )
}

export default MenuBar