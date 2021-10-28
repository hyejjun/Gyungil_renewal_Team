import DeliveryForm from "./DeliveryForm";

const DeliveryInfo = () => {
    return(
        <>
            <DeliveryForm>
                <h3>배송 정보</h3>
                <p></p>
                    <table>
                        <tbody>
                            <tr>
                                <td>주문번호</td>
                                <td>001-A040874087</td>
                            </tr>
                            <tr>
                                <td>배송방법</td>
                                <td>택배</td>
                            </tr>
                            <tr>
                                <td>상태</td>
                                <td>상품 준비 중 (2012-09-06)</td>
                            </tr>
                        </tbody>
                    </table>

                </DeliveryForm>
        </>
    )
}

export default DeliveryInfo