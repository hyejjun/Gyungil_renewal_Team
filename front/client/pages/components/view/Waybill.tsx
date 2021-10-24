import Styled from 'styled-components'

const Waybill = ()=>{
    return(
        <>
            <div>
                <ul>
                    <li>상품</li>
                    <li>
                        <img src="/" alt="상품사진" />
                    </li>
                    <li>택배사</li>
                    <li>
                        <input type="text" />
                    </li>
                    <li>운송장</li>
                    <li>
                        <input type="text" />
                    </li>
                </ul>
                <button>운송장 등록</button>
            </div>
        </>
    )
}

export default Waybill