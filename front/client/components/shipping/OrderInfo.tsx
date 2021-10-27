import DeliveryForm from "./DeliveryForm";

const OrderInfo = () => {
    return(
        <>
            <DeliveryForm>
                <h3>주문자 정보</h3>
                <p></p>
                    <table>
                        <tbody>
                            <tr>
                                <td>주문하신 분</td>
                                <td>김서영</td>
                            </tr>
                            <tr>
                                <td>받으시는 분</td>
                                <td>김서영</td>
                            </tr>
                            <tr>
                                <td>배송주소</td>
                                <td>
                                    (06565) 서울특별시 사당로 29다길 메롱
                                </td>
                            </tr>
                            <tr>
                                <td>휴대번호</td>
                                <td>
                                    010-6618-2614
                                </td>
                            </tr>
                            <tr>
                                <td>배송메세지</td>
                                <td>
                                    출입방법: 자유 출입 가능
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </DeliveryForm>
        </>
    )
}

export default OrderInfo