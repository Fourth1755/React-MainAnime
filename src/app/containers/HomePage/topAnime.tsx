import styled from "styled-components";
import React, { useState } from "react";
import tw from "twin.macro";
import { Anime } from "../../components/anime";
import { Ianime } from "../../../typings/anime";
import Carousel,{Dots,slidesToShowPlugin} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { SCREEN } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";

const TopAnimeContainer=styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `};
`;
const Title=styled.h2`
    ${tw`
        text-xl
        lg:text-4xl
        text-black
        font-extrabold
    `};
`;
const AnimeContainer=styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;
export function TopAnime(){
    const [current,setCurrent]=useState(0);;
    const isMobile=useMediaQuery({maxWidth: SCREEN.sm});
    const testAnime1: Ianime={
        name:"Fullmetal Alchemist",
        score:9,
        picture:"https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
        studios:"Bones",
        premiered:"Spring 2009",
        episodes:64,
        status:"Watching"
    }
    const testAnime2: Ianime={
        name:"Steins;Gate",
        score:9.10,
        picture:"https://cdn.myanimelist.net/images/anime/5/73199.jpg",
        studios:"White Fox",
        premiered:"Spring 2011",
        episodes:24,
        status:"Watching"
    }
    const testAnime3: Ianime={
        name:"Jujutsu Kaisen",
        score:8.76,
        picture:"https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
        studios:"MAPPA",
        premiered:"Fall 2020",
        episodes:24,
        status:"Watching"
    }
    const testAnime4: Ianime={
        name:"Shigatsu wa Kimi no Uso",
        score:8.70,
        picture:"https://cdn.myanimelist.net/images/anime/3/67177.jpg",
        studios:"A-1 Pictures",
        premiered:"Fall 2014",
        episodes:22,
        status:"Watching"
    }
    const animelist=[<Anime {...testAnime1}/>,
        <Anime {...testAnime2}/>,
        <Anime {...testAnime3}/>,
        <Anime {...testAnime4}/>]
    const numberOfDots = isMobile? animelist.length :Math.ceil(animelist.length/3)
    return<TopAnimeContainer>
        <Title>Expore Our Top Deals</Title>
        <AnimeContainer>
            <Carousel value={current} onChange={setCurrent} slides={animelist}
                plugins={[
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides:3,
                    }
                }
                ]}
                breakpoints={{
                    640:{
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides:1,
                                }
                            }]
                    },
                    900:{
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides:2,
                                }
                            }]
                    }
                }}
                />
            <Dots value={current} onChange={setCurrent} number={numberOfDots}/>  
        </AnimeContainer>
    </TopAnimeContainer>
}