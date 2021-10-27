import Link from 'next/link';
import Styled from 'styled-components';
import React, { useState } from 'react'



const Category = (props) => {
    const { gender, List, handlegender, handleList } = props.CategoryState

    return (
        <CategoryWrapper>
            <H3>Category</H3>

            <Ul>
                <Line></Line>
                <Subject onClick={handlegender}>성별</Subject>
                <Line></Line>
                {gender == true ?
                    <>
                        <LI>여성복</LI>
                        <LI>남성복</LI>
                        <LastLi>아동복</LastLi>
                    </>
                    :
                    <li></li>
                }
            </Ul>
            <Ul>
                <Line></Line>
                <Subject onClick={handleList}>여분</Subject>
                <Line></Line>
                {List == true ?
                    <>
                        <LI>리스트</LI>
                        <LI>리스트</LI>
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
    width: 20%;
    height: 300px;
    background: yellow;
    display : inline-block;
`
const H3 = Styled.div`
    font-size:30px;
    margin-bottom:20px;
    margin-top:20px;
`

const Subject = Styled.li`
    font-size:20px;
    margin-bottom:8px;

`

const Line = Styled.li`
    height:2px;
    background:#bbb;
    margin-bottom:10px;
    width:300px;
`

const LI = Styled.li`
    color:grey;
    &:hover{
        color:black
    }
`
const LastLi = Styled.li`
    margin-bottom:30px;
    color:grey;
    &:hover{
        color:black
    }
`

const Ul = Styled.ul`
    & > li{
        line-height:25px;
    }
    &:hover{
       
    }
`