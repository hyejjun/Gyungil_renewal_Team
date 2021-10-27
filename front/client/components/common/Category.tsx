import Link from 'next/link';
import Styled from 'styled-components';
import React, { useState } from 'react'



const Category = (props) => {
    const { gender, List, handlegender, handleList } = props.CategoryState

    return (
        <CategoryWrapper>
            <H3>전체 카테고리</H3>
            <Ul>
                <Line></Line>
                <Subject onClick={handlegender}>성별</Subject>
                <Line></Line>
                {gender == true ?
                    <>
                        <LI>여성복</LI>
                        <LI>남성복</LI>
                        <LI>아동복</LI>
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
                        <LI>리스트</LI>
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
    height: auto;
    /* background: yellow; */
    display : inline-block;
`
const H3 = Styled.div`
    font-size: 18px;
    margin-bottom:20px;
    cursor : default;
`

const Subject = Styled.li`
    font-size: 15px;
    margin-bottom:8px;
    cursor : pointer;
`

const Line = Styled.li`
    height:2px;
    background:#bbb;
    margin-bottom:10px;
`

const LI = Styled.li`
    height: 40px;
    font-size: 14px;
    line-height: 29px;
    letter-spacing: -1px;
    color: #777;
    padding-bottom: 10px;
    cursor : pointer;
    &:hover{
        color:black
    }
`
const LastLi = Styled.li`
    margin-bottom:30px;
    color:grey;
    &:hover{
        color:black
        border-bottom : 1px solid black;
    }
`

const Ul = Styled.ul`
    &:hover{
       
    }
`