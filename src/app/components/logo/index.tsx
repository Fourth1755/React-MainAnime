import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../../assets/images/Anime-map (2).png"

interface  ILogoProps{
    color: "white" | "dark";
    bgColor: "white" | "dark";
}

const LogoComponent=styled.div`
    ${tw`
        flex
        items-center
    `};
`;
const LogoText=styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-white
        m-1    
    `};
    ${({color}:any)=>(color === "white" ? tw`text-white`: tw`text-black`)}
`as any;
const Image=styled.div`
    width:auto; 
    
    ${tw`h-6 md:h-9`};
    img{
        width:auto;
        height:100%;
    }
`;
export function Logo(prps: ILogoProps){
    const {color,bgColor}=prps;
    return<LogoComponent>
        <Image>
            {/* <img src={bgColor === "dark"? logo : logo}/>  */}
        </Image>
        <LogoText color={color || "dark"}>AnimE-Map</LogoText>
    </LogoComponent>
}