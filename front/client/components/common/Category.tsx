import Link from 'next/link';
import Styled from 'styled-components';
import React, {useState} from 'react'



const Category = () => {

    const [gender,setgender] = useState(true)
    const [size,setSize] = useState(true)
    const [List,setList] = useState(true)

    const handlegender = () => {
        setgender(prev => !prev)
    }

    const handleSize = () => {
        setSize(prev => !prev)
    }

    const handleList = () => {
        setList(prev => !prev)
    }

    return(
        <CategoryWrapper>
            <H3>Category</H3>
            <Ul>
                <Subject onClick = {handleSize}>사이즈</Subject>
                <Line></Line>
                    { size == true ?
                    <>
                        <li>XL</li>
                        <li>L</li>
                        <li>M</li>
                        <li>S</li>
                        <LastLi>XS</LastLi>
                    </>
                        :
                        <li></li>
                    }
            </Ul>
            <Ul>
                <Subject onClick = {handlegender}>성별</Subject>
                <Line></Line>
                { gender == true ?
                <>
                    <li>여성복</li>
                    <li>남성복</li>
                    <LastLi>아동복</LastLi>
                </>
                    :
                    <li></li>
                }
            </Ul>
            <Ul>
                <Subject onClick = {handleList}>여분</Subject>
                <Line></Line>
                { List == true ?
                <>
                    <li>리스트</li>
                    <li>리스트</li>
                    <LastLi>리스트</LastLi>
                </>
                    :
                    <li></li>
                }
            </Ul>
        </CategoryWrapper>
    )
}

export default Category


const CategoryWrapper = Styled.div`
    width:200px;
    box-sizing:border-box;
    padding:20px;
    z-index:3px;
    position:absolute;
    float:left;
    top:80px;
    height:600px;
    width:300px;
    left:0px;
`
const H3 = Styled.div`
    font-size:30px;
    margin-bottom:20px;
`

const Subject = Styled.li`
    font-size:20px;
    margin-bottom:8px;

`

const Line = Styled.li`
    height:2px;
    background:#bbb;
    margin-bottom:10px;
`

const LastLi = Styled.li`
    margin-bottom:30px;
`

const Ul = Styled.ul`
    & > li{
        line-height:25px;
    }
`