import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Megumin from"../../../assets/images/megumin2.png"
import { Button } from "../../components/button";
import { SCREEN } from "../../components/responsive";

const TopSectionContainer=styled.div`
    min-height: 520px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `};
`;
const LeftContainer=styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `};
`;
const RightContainer=styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;

const Slogan =styled.h1`
${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    text-white
    md:font-extrabold
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
`};
`;
const Description=styled.div`
${tw`
    text-xs
    lg:text-sm
    sm:text-lg
    overflow-hidden
    max-h-12
    text-white
`};
`;
const BlockContainer=styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top:-9em;
    z-index: -1;
    transform: rotate(-30deg);
    img{
        width: 100%;
        height: auto;
        max-height: max-content;
    }
    @media(min-width : ${SCREEN.sm}){
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }
    @media(min-width : ${SCREEN.lg}){
        width: 50em;
        max-height: 30em;
        right: -7em;
        top: -15em;
        transform: rotate(-30deg);
    }
    @media(min-width : ${SCREEN.xl}){
        width: 70em;
        max-height: 30em;
        right: -15em;
        top: -25em;
        transform: rotate(-20deg);
    }
`;
const Standalone=styled.div`
    width: auto;
    height: 10em;
    right: -6em;
    top:-5em;
    position: absolute;
    img{
        width: 100%;
        height: 100%;
        max-width: fit-content;
    }
    @media(min-width : ${SCREEN.sm}){
        height: 16em;
        right: -6em;
        top: -6em;
    }
    @media(min-width : ${SCREEN.lg}){
        height: 21em;
        right: -8em;
        top: -5em;
    }
    @media(min-width : ${SCREEN.xl}){
        height: 40em;
        right: -13em;
        top: -9em;
    }
`;
const ButtonContainer=styled.div`
    ${tw`
        flex
        flex-wrap
        mt-4
    `};
`;
export function TopSection(){
    return<TopSectionContainer>
        <LeftContainer>
            <Slogan>ตามหาอนิเมะใหม่ๆ</Slogan>
            <Description>
                ที่สุดแห่งความบันเทิงไม่รู้จบกับ Anime-map อนิเมะเรื่องไหนเคยดูแล้วบันทึกเอาไว้ในนี้
            </Description>
            <ButtonContainer>
                <Button text="Add anime"/>
                <Button theme="filled" text="Sell Your anime"/>
            </ButtonContainer>
        </LeftContainer>
        <RightContainer>
            <BlockContainer>
                <img src=""/>
            </BlockContainer>
            <Standalone>
                <img src={Megumin}/>
            </Standalone>
        </RightContainer>
    </TopSectionContainer>
}