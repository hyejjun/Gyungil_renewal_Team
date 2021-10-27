import Styled from 'styled-components'

const SizeSelect = () => {
    return (
        <SizeSelectCSS>
            <option>
                SIZE
            </option>
            <option>
                XL
            </option>
            <option>
                L
            </option>
            <option>
                M
            </option>
            <option>
                S
            </option>
            <option>
                XS
            </option>
        </SizeSelectCSS>
    )
}
export default SizeSelect


const SizeSelectCSS = Styled.select`
    margin-right:10px;
    width:72px;
    font-size:22px;
    border: 1px solid #aab4be;
    border-radius : 4px;

    &:focus {
        outline: none;
    }
`
