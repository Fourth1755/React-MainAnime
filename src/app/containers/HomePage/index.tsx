import React from "react";
import styled from "styled-components"
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import Fantacy from "../../../assets/images/fantasy2.jpg"
import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { AddingStep} from "./addingStep";
import { AboutUs } from "./aboutUs";
import { TopAnime } from "./topAnime";
import { Footer } from "../../components/footer";
const PageContainer=styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
        h-screen
    `}
`;
const MiniPageContainer=styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        h-screen
    `};
`;
export function HomePage(){
    return <PageContainer >
            <MiniPageContainer style={{backgroundImage: `url(${Fantacy})`}}>
                <Navbar/>
                <TopSection/>
            </MiniPageContainer>
            <Marginer direction="vertical" margin="4em"/>
            <BookCard/>
            <Marginer direction="vertical" margin="6em"/>
            <AddingStep/>
            <Marginer direction="vertical" margin="6em"/>
            <AboutUs/>
            <TopAnime/>
            <Footer/>
    </PageContainer>
}