import Styled from 'styled-components';
import React, { useState } from "react";


const DeletedItemComponent = () =>{
    const [text, setText] = useState<string>("자바스크립트");
    return(
        <>
            <div> 
                <h1>
                    존재하지 않는 NFT입니다.
                </h1>
                <h2>
                    존재하지 않거나 삭제되어 NFT 정보를 확인할 수 없습니다.
                </h2>
                <button/>
            </div>
        </>
    )
}
// BigTitle, DescText, Button import
export default DeletedItemComponent
