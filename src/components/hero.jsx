import React from 'react'
import styled from 'styled-components'
import { Navbar } from './navbar';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`; 

const HeroContainer = styled.div`
  margin-top: 50px;
  height: 100vh;
  scroll-snap-align: center;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeroLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 100px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: 'Montserrat', sans-serif;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

`;

const Line = styled.img`
  height: 5px;
`;

const SubTitle = styled.h2`
  color: #08f1a4;
`;

const Description = styled.p`
  font-size: 20px;
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
`;

const Img = styled.img`
  width: 700px;
  height: 400px;
  object-fit: contain;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  position: absolute;

  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    100% {
      transform: translateY(-20px);
    }
  }
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
            <SubTitle>
              Developer
            </SubTitle>
          </Info>
          <Description>
            Hi there! I'm a software developer with a passion for solving 
            complex problems and creating intuitive, user-friendly applications.
          </Description>
          <Button>See My Work</Button>
        </HeroLeft>

        <HeroRight>
          {/* 3d model */}
          <Img src="./img/spaceman.png" />
        </HeroRight>
      </HeroContainer>
    </Section>
  )
}
