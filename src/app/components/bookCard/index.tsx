import { faCalendar, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { SCREEN } from "../responsive";

const CardContainer =styled.div`
    min-height: 4.3em;
    box-shadow:0 1.3px 12px-3px rgba(0,0,0,0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-8
        md:pr-8
    `};
`;
const ItemContainer=styled.div`
    ${tw`
        flex relative
    `};
`;
const Icon=styled.span`
    ${tw`
        text-red-500
        fill-current
        md:text-base
        mr-1
        md:mr-3
    `};
`;
const Name =styled.span`
    ${tw`
        text-gray-600  
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `};
`;

const LineSeperator =styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:ml-5
        md:mr-5
    `};
`;
const DateCalender= styled(Calendar)<{offset:boolean}>`
    position: absolute;
    max-width: none;
    top: 2em;
    left: 0;
    user-select: none;
    ${({offset})=>offset && css`
        left:-6em;

    `};
    @media(min-width: ${SCREEN.md}){
        top:3.5em;
        left:-2em;
    }
`as any;
const SmallIcon=styled.span`
${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
`};
`;
export function BookCard(){
    const [startDate,setStartDate]=useState<Date>(new Date());
    const [isStartCarlenderOpen,setStartCarlenderOpen]=useState(false);
    const toggleStartDateCarlender=()=>{
        setStartCarlenderOpen(!isStartCarlenderOpen);
        if(isReturnCarlenderOpen){
            setReturnCarlenderOpen(false);
        }
    } 
    console.log("StartDate= "+startDate);
    const [returnDate,setReturnDate]=useState<Date>(new Date());
    const [isReturnCarlenderOpen,setReturnCarlenderOpen]=useState(false);
    const toggleReturnDateCarlender=()=>{
        setReturnCarlenderOpen(!isReturnCarlenderOpen);
        if(isStartCarlenderOpen){
            setStartCarlenderOpen(false);
        }
    } 
    console.log("ReturnDate= "+returnDate);
    return<CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}/>
            </Icon>
            <Name onClick={toggleStartDateCarlender}>Pick up Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isStartCarlenderOpen ? faCaretUp:faCaretDown}/>
            </SmallIcon>
            {isStartCarlenderOpen&&(<DateCalender value={startDate} onChange={setStartDate as any}/>)}
        </ItemContainer>
        <LineSeperator/>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}/>
            </Icon>
            <Name onClick={toggleReturnDateCarlender}>Return Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isReturnCarlenderOpen ? faCaretUp:faCaretDown}/>
            </SmallIcon>
            {isReturnCarlenderOpen&&(<DateCalender offset value={returnDate} onChange={setReturnDate as any}/>)}
        </ItemContainer>
        <Marginer direction="horizontal" margin="2em"/>
        <Button text="Book your Day"/>
    </CardContainer>
}