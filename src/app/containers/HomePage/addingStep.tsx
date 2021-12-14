import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faBookOpen, faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container=styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:pt-6
        lg:pb-6
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
const StepsContainer=styled.div`
    ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `};
`;
const StepContainer=styled.div`
    ${tw`
        flex
        flex-col
        md:w-96
        items-center
        transition-colors
        hover:text-red-500
        m-3
    `};
`;
const Step =styled.div`
    box-shadow: 0 1.3px 12px -3px rgba(0,0,0,1);
    ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `};
`;
const StepTitle=styled.h4`
    ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `};
`;
const StepDescription=styled.p`
    ${tw`
        md:text-sm
        text-xs
        text-center
        w-10/12
        text-gray-600
    `};
`;
const StepIcon=styled.span`
    ${tw`
        text-red-500
        text-3xl    
    `};
`;
export function AddingStep(){
    return<Container>
        <Title>Our Working Steps</Title>
        <StepsContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faMapMarked}/>
                    </StepIcon>
                </Step>
                <StepTitle>Choose Anime</StepTitle>
                <StepDescription>
                    Find the anime that you want to see now.
                </StepDescription>
            </StepContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faCalendar}/>
                    </StepIcon>
                </Step>
                <StepTitle>Pick-UP Date</StepTitle>
                <StepDescription>
                    Pick-UP the best date to see anime.
                </StepDescription>
            </StepContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faBookOpen}/>
                    </StepIcon>
                </Step>
                <StepTitle>Book your anime</StepTitle>
                <StepDescription>
                    Book your nice anime with ease in one single click.
                </StepDescription>
            </StepContainer>

        </StepsContainer>
    </Container>
}