import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREEN } from "../../components/responsive";
import Tosaka from "../../../assets/images/tosaka.png"
const AboutUsContainer =styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `};
`;

const AnimeContainer =styled.div`
    width: auto;
    height: 15em;
    margin-left: -30px;
    img {
        width: auto;
        height: 100%;
    }
    @media(min-width: ${SCREEN.md}){
        height: 28em;
    }
    @media(min-width: ${SCREEN.lg}){
        height: 30em;
    }
    @media(min-width: ${SCREEN["2xl"]}){
        height: 35em;
    }
`;
const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
`;
const Title =styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;
const InfoText =styled.p`
    ${tw`
        text-sm
        text-gray-500
        md:text-base
        md:max-w-2xl
        mt-4
        font-normal
    `};
`;
export function AboutUs(){
    return<AboutUsContainer>
        <AnimeContainer>
            <img src={Tosaka}/>
        </AnimeContainer>
        <InfoContainer>
            <Title>Fell The Best Experience With Our Rental Deals</Title>
            <InfoText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem dolor at quo obcaecati temporibus veniam libero culpa. Saepe vel aspernatur ea. Officia dolorum cum, eos quo odit, vel mollitia distinctio fugit et nostrum fugiat tempore iste veritatis temporibus laborum optio labore quaerat reprehenderit maxime necessitatibus ex eaque. Vero, molestiae? Repellendus, eveniet officiis. At quia vitae dignissimos odio voluptatibus ducimus ipsam quaerat eos, accusamus ullam qui placeat reprehenderit accusantium corrupti culpa minima quae natus officia architecto perferendis praesentium saepe iure optio! Obcaecati eveniet sint, laborum aliquid id accusamus quo veniam quod deserunt impedit. Asperiores labore soluta quo voluptatibus ipsam corporis, natus consequatur obcaecati facere quia rerum recusandae atque a, quasi fugiat, excepturi quis rem dolorem tempore quam molestiae aperiam deserunt corrupti eos! Dignissimos, totam eligendi officiis sunt facere quo quidem earum ex commodi unde voluptatibus. Expedita id deserunt vero suscipit provident minima aliquid, beatae voluptatibus saepe, excepturi esse asperiores hic quod veniam aperiam non distinctio tempora iste iusto dicta at veritatis doloremque. Labore culpa earum in harum laudantium sit debitis nisi. Aperiam odio doloribus accusamus molestias omnis, quaerat aut hic itaque aliquam veniam impedit voluptatibus corrupti velit excepturi odit ab? Enim expedita atque perferendis mollitia ut laudantium aperiam exercitationem voluptatibus.
            </InfoText>
        </InfoContainer>
    </AboutUsContainer>
}
