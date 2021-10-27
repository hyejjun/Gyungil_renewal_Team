import DeliveryForm from "./DeliveryForm";

const ProductInfo = () => {
    return(
        <>
            <DeliveryForm>
                <h3>상품 정보</h3>
                <p></p>
                    <table>
                        <tbody>
                            <tr>
                                <td>상품명</td>
                                <td>미학의 문제와 방법</td>
                            </tr>
                            <tr>
                                <td>상품 가격</td>
                                <td>15000원</td>
                            </tr>
                            <tr>
                                <td>총 주문금액</td>
                                <td>15700 원 (상품가격 15000원 + 배송료 700원)</td>
                            </tr>
                            <tr>
                                <td>결제 방법</td>
                                <td>kaikas</td>
                            </tr>
                        </tbody>
                    </table>

                </DeliveryForm>
        </>
    )
}

export default ProductInfo