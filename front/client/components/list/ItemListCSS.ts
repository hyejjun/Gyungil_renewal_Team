import Styled from 'styled-components'

const PictureNumberNotice = Styled.div`
    color:#2d3741;
    font-size:19px;
    font-weight:bold;
    display:inline-block;
    text-decoration:none;
    list-style:none;
    /* margin-left:40px; */
    float:left;
    margin-bottom:50px;
    clear:both;
    cursor : default;
`
const SelectBox = Styled.select`
    display:inline-block;
    float:right;
    height:38px;
    width:180px;
    padding:3px 7px;
    box-sizing:border-box;
    font-size:16px;
`
const SelectOption = Styled.option`
    color:black;
    display:inline-block;
    padding:5px;

`
const NFTComponent = Styled.div`
    clear:both;
    background:#FAFAFA;
    box-sizing:border-box;
    display : flex;
    gap: 10%;

    & > div:nth-child(2){
        display : inline-block;
        width : 80%;
    }
`
const NFTFourList = Styled.ul`
    display:inline-block;
    list-style:none;
    margin: 0 15px;
`
const NFT = Styled.li`
    border: 1px solid #bbb;
    border-radius:7px;
    height:360px;
    width:243px;
    box-sizing:border-box;
    padding:19px;
    margin-bottom:20px;
    &:hover{box-shadow:3px 3px 10px #bbb;}
`
const NFTImg = Styled.div`
    background:#bbb;
    width:200px;
    height:200px;
    cursor:pointer;
`

const NFTOne = Styled.ul`
    padding:0px;
    clear:both;
`

const NFTOneList = Styled.li`
    display:inline-block;
    list-style:none;
    float:left;
    margin-top:18px;

`
const NFTOneImg = Styled.li`
    display:inline-block;
    list-style:none;
    float:right;
    margin-top:18px;
    background:#bbb;
    width:35px;
    height:35px;

`

const NFTDeclaration = Styled.li`
    display:inline-block;
    list-style:none;
    float:right;
    margin-top:22px;
    width:35px;
    height:35px;
    color:grey;
    font-weight:bold;
    margin-left:30px;


`
const NFTSubject = Styled.div`
    font-weight:bold;
`

const NFTartist = Styled.div`
     color:#bbb;

`
const Line = Styled.div`
    background:#bbb;
    margin-top:20px;
    height:1px;
`

const MoreNFT = Styled.div`
    text-align:center;
    padding:10px;
    font-size:26px;
    box-sizing:border-box;
    width:150px;
    height:60px;
    color:grey;
    border:1px solid #bbb;
    border-radius:5px;
    background:white;
    margin:0 auto;
    margin-bottom:120px;
    margin-top:50px;
    cursor:pointer;
    &:hover{
        background:#bbb;
        color:white;
        transition:all 1s ease 0;
    }
`
const AStyle = Styled.a`
    text-decoration:none;
`

export const ItemListCSS = {
    PictureNumberNotice,
    SelectBox,
    SelectOption,
    NFTComponent,
    NFTFourList,
    NFT,
    NFTImg,
    NFTOne,
    NFTOneList,
    NFTOneImg,
    NFTDeclaration,
    NFTSubject,
    NFTartist,
    Line,
    MoreNFT,
    AStyle,
}