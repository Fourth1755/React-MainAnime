import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMailBulk, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer =styled.div`
    //min-height: 30em;
    background-color: #1D2124;
    ${tw`
        flex
        flex-col
        pt-4
        pb-4
        md:pt-12
        flex-col
        min-w-full
        items-center
        justify-center
        lg:pl-12
        lg:pr-12
    `};
`;

const InnerContainer =styled.div`
    ${tw`
        flex
        flex-wrap
        max-w-screen-2xl
        w-full
        h-full
        
    `};
`;
const BottomContainer=styled.div`
    ${tw`
        flex
        w-full
        justify-center
        md:justify-start
        max-w-screen-2xl
        mt-7
        md:mt-1
    `};
`;
const CopyrightText=styled.span`
    font-size: 12px;
    ${tw`
        text-gray-400
    `};
`;
const AboutContainer =styled.div`
    ${tw`
        flex
        flex-col
        mr-3
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3
    `};
`;
const AboutText=styled.p`
    ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
        
    `};
`;
const SectionContainer=styled.div`
     ${tw`
        w-full
        md:w-auto
        flex
        flex-col
        mr-2
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3
        mt-7
        md:mt-0
     `};
`;
const LinksList =styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
    `};
`;
const ListItem=styled.li`
    ${tw`
        mb-3
    `};
    &>a{
        ${tw`
            text-sm
            text-white
            transition-all
            hover:text-gray-500
        `};
    }
`;
const HeaderTitle=styled.h3`
    ${tw`
        text-2xl
        font-bold
        text-white
        mb-3
    `};
`;
const RedIcon =styled.span`
    ${tw`
        w-9
        h-9
        rounded-full
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
        bg-red-500
    `};
`;
const HorizontalContainer=styled.div`
    ${tw`
        flex
        items-center
    `};
`;
const SmallText=styled.h6`
    ${tw`
        text-sm
        text-white
    `};
`;
export function Footer(){
    return<FooterContainer>
            <InnerContainer>
                 <AboutContainer>
                    <Logo color="white" bgColor="white"/>
                    <AboutText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officiis voluptatibus consequuntur quasi? Impedit iusto quaerat nihil? Vitae blanditiis in adipisci consequuntur vero assumenda sit? Perspiciatis architecto nulla pariatur molestiae quidem, voluptate minima quibusdam iste doloremque sequi fugit quos. Quo corporis magni adipisci necessitatibus temporibus repudiandae iure fugiat cumque possimus?
                    </AboutText>
                </AboutContainer>
                <SectionContainer>
                    <HeaderTitle>Our Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="#">Home</a></ListItem>
                        <ListItem><a href="#">About Us</a></ListItem>
                        <ListItem><a href="#">Models</a></ListItem>
                        <ListItem><a href="#">Blog</a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Other Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="#">FAQ</a></ListItem>
                        <ListItem><a href="#">Contact Us</a></ListItem>
                        <ListItem><a href="#">Support</a></ListItem>
                        <ListItem><a href="#">Privacy Policy</a></ListItem>
                        <ListItem><a href="#">Team &amp; Conditions</a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Call Now</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                        </RedIcon>
                        <SmallText>+92 252 5835</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Mail</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </RedIcon>
                        <SmallText>pooriwat.p@ku.th</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>
            <BottomContainer>
                <CopyrightText>Copytight &copy; {new Date().getFullYear()} Youranime. All right reserved.</CopyrightText>
            </BottomContainer>
    </FooterContainer>
}