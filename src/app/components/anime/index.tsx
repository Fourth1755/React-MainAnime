import { faBuffer, faViadeo } from "@fortawesome/free-brands-svg-icons";
import { faAward, faEllipsisH, faFillDrip, faFilm, faTachometerAlt, faTape, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Ianime } from "../../../typings/anime";
import { Button } from "../button";

interface IAnimeProps extends Ianime{

}
const AnimeContainer=styled.div`
    width: 16.5em;
    min-height: 24.2em;
    max-height : 100%;
    box-shadow: 0 1.3px 17px -2px rgba(0,0,0,0.4);
    ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `};
`;
const AnimeThumbnail=styled.div`
    width: 100%;
    height: 22em;
    img{
        width: 100%;
        height:100%;
    }
`;
const AnimeName=styled.h3`
    ${tw`
        text-base
        font-bold
        text-black
        mt-1
        mb-1
    `};
`;
const PricesContainer=styled.div`
    ${tw`
        w-full
        flex
        justify-start
        mt-3
    `};
`;
const SmallText=styled.p`
    color: inherit;
    ${tw`
        inline-flex
        text-xs
        font-thin
    `};
`;
const DailyPrice=styled.h5`
    ${tw`
        text-gray-500
        font-bold
        text-sm
        text-red-500
        mr-3
    `};
`;
const MonthPrice=styled.h5`
    ${tw`
        text-gray-500
        font-bold
        text-sm
    `};
`;
const SmallIcon=styled.span`
    ${tw`
        text-gray-400
        text-sm
        mr-1
    `};
`;
const AnimeDetailContainer=styled.div`
    ${tw`
        flex
        w-full
        justify-between
    `};
`;

const AnimeDetail=styled.span`
    ${tw`
        flex
        items-center
    `};
`;
const AnimeInfo=styled.h6`
    ${tw`
        text-gray-400
        text-xs
    `};
`;
const Seperator=styled.div`
    min-width: 100%;
    min-height: 1px;
    ${tw`
        flex
        bg-gray-300
        mt-2
        mb-2
    `};
`;
const RentButton=styled(Button)`
    ${tw`
        min-w-full
        mt-5
    `};
`;

export function Anime(props:IAnimeProps){
    const {name,picture,score,studios,episodes,premiered,status,}=props;
    return<AnimeContainer>
        <AnimeThumbnail>
            <img src={picture}/>
        </AnimeThumbnail>
        <AnimeName>{name}</AnimeName>
        <PricesContainer>
            <DailyPrice><SmallText>Episodes:</SmallText> {episodes}</DailyPrice>
            <MonthPrice><SmallText>Status: </SmallText> {status}</MonthPrice>
        </PricesContainer>
        <Seperator/>
        <AnimeDetailContainer>
            <AnimeDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faAward}/>
                </SmallIcon>
                <AnimeInfo>{score}</AnimeInfo>
            </AnimeDetail>
            <AnimeDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faFilm}/>
                </SmallIcon>
                <AnimeInfo>{studios}</AnimeInfo>
            </AnimeDetail>
            <AnimeDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faVideo}/>
                </SmallIcon>
                <AnimeInfo>{premiered}</AnimeInfo>
            </AnimeDetail>
        </AnimeDetailContainer>
        <RentButton text="Add Now"/>
    </AnimeContainer>
}