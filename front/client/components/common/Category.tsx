import Link from 'next/link';
import Styled from 'styled-components';
import React, { useState } from 'react'

const Category = (props) => {
    const { genderTab, List, genderTabOpen, handleList, selectGender, genderSelect } = props.CategoryState
    
    return (
        <CategoryWrapper>
            <H3>전체 카테고리</H3>
            <Ul flag={genderSelect}>
                <Line></Line>
                <Subject onClick={genderTabOpen}>성별</Subject>
                <Line></Line>
                {genderTab == true ?
                    <>
                        <LI onClick={() => { selectGender(1) }} className="female" >여성복</LI>
                        <LI onClick={() => { selectGender(2) }} className="male" >남성복</LI>
                        <LI onClick={() => { selectGender(3) }} className="child" >아동복</LI>
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

const Ul = Styled.ul`
    .female{
        color: ${props => (props.flag == 1 ? '#000000' : '#777')};
        font-weight: ${props => (props.flag == 1 ? 'bold' : 'none')};
        text-decoration : ${props => (props.flag == 1 ? 'underline' : 'none')};
    }

    .male{
        color: ${props => (props.flag == 2 ? '#000000' : '#777')};
        font-weight: ${props => (props.flag == 2 ? 'bold' : 'none')};
        text-decoration : ${props => (props.flag == 2 ? 'underline' : 'none')};
    }

    .child{
        color: ${props => (props.flag == 3 ? '#000000' : '#777')};
        font-weight: ${props => (props.flag == 3 ? 'bold' : 'none')};
        text-decoration : ${props => (props.flag == 3 ? 'underline' : 'none')};
    }
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