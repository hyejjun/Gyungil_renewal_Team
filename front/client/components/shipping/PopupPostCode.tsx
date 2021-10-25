import React, {useState} from 'react';
import DaumPostcode from "react-daum-postcode";
import Styled from 'styled-components'

const PopupPostCode = (props) => {



	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        props.setaddress(fullAddress)
        props.setpostNumber(data.zonecode)
        props.onClose()
    }
 
 
    return(
        <div>
            <PostCodeStyle><DaumPostcode onComplete={handlePostCode} /></PostCodeStyle>
            <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
        </div>
    )
}
 
export default PopupPostCode;

const PostCodeStyle = Styled.div`
  display: "block",
  position: "absolute",
  top: "10%",
  width: "600px",
  height: "600px",
  padding: "7px",
`