import React from 'react'
import styled from 'styled-components'
import MyProfile from './my-profile';
import { Navbar } from './navbar';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 769px) {
        height: 200vh;
    }

`; 

const HeroContainer = styled.div`
  margin-top: 50px;
  height: 100vh;
  scroll-snap-align: center;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 769px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
        flex:1;
    }
`;

const Title = styled.h1`
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
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
    }
`;

const Img = styled.img`
  width: 500px;
  height: 300px;
  object-fit: contain;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  position: absolute;

  animation: animateImg 2s infinite ease alternate;

  @keyframes animateImg {
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
              Software Developer
            </SubTitle>
          </Info>
          <Description>
            Hi there! I'm a software developer with a passion for solving 
            complex problems and creating intuitive, user-friendly applications.
          </Description>
          <Button>See My Work</Button>
        </HeroLeft>

        <HeroRight>
          <MyProfile />
        </HeroRight>
      </HeroContainer>
    </Section>
  )
}
