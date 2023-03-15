import React from "react";
import styled from "styled-components";
import MyProfile from "./my-profile";
import { Navbar } from "./navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 769px) {
    height: 115vh;
  }
`;

const HeroContainer = styled.div`
  margin-top: 50px;
  height: 100%;
  scroll-snap-align: center;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 769px) {
    height: 100%;
    margin-top: 10px;
    width: 100%;
    flex-direction: column-reverse;
  }
`;

const HeroLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 200px;

  @media only screen and (max-width: 769px) {
    flex: 1;
    padding: 0px 10px;
    align-items: center;
    text-align: center;
    gap: 5px;
    transform: translateY(-60px);
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-family: "Montserrat", sans-serif;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 2px;
`;

const SubTitle = styled.h2`
  color: #08f1a4;
  font-size: 17px;
`;

const Description = styled.p`
  font-size: 15px;
`;

const Button = styled.button`
  background-color: #08f1a4;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 150px;
  :hover {
    transform: scale(1.1);
  }
  transition: all 0.5s ease;
`;

const HeroRight = styled.div`
  flex: 3;
  position: relative;
  height: 100%;

  @media only screen and (max-width: 769px) {
    flex: 1;
    height: 20%;
    width: 50%;
  }
`;

const LinkTo = styled.a`
  text-decoration: none;
  color: #070707;
`;

export const Hero = () => {
  return (
    <Section>
      <Navbar />

      <HeroContainer>
        <HeroLeft>
          <Title>I'm Mekhail Meiring</Title>
          <Info>
            <Line src="./img/line.png" />
            <SubTitle>Software Developer</SubTitle>
          </Info>
          <Description>
            Hi there! I'm a software developer with a passion for solving
            complex problems and creating intuitive, user-friendly applications.
          </Description>
          <Button>
            <LinkTo href="#projects">See my projects</LinkTo>
          </Button>
        </HeroLeft>

        <HeroRight>
          <MyProfile />
        </HeroRight>
      </HeroContainer>
    </Section>
  );
};
