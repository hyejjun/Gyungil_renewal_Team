import Styled from 'styled-components'
import DeliveryForm from './DeliveryForm'
import ModalBackground from '../common/ModalBackground' 

const InvoiceForm = () => {
    return (
        
            <ModalBackground>
            <InvoiceWrapper>
                <DeliveryForm>

                    <table>
                        <thead>
                            <h3>송장정보입력</h3>
                            <button>입력완료</button>
                            
                        </thead>
                    
                        <tbody>
                            <tr>
                                <td>택배사</td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>송장번호</td>
                                <td><input></input></td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                
                </DeliveryForm>
                </InvoiceWrapper>
            </ModalBackground>
        
    )
}

export default InvoiceForm

const InvoiceWrapper = Styled.div`
    display:flex;
    margin-left:-230px;
    margin-top:200px;
    cursor:pointer;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    
    table{
        padding:20px;
        cursor:pointer;
    }
    input{
        padding:5px;
    }
    thead>h3 {
        float:left;
        padding-right:30xppx;
    }
    button{
        padding:7px;
        float:left;
        margin-right:-200px;
        margin-top:-4px;
        margin-left:80px;
    }

    


`