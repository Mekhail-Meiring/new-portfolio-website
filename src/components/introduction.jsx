import React from "react";
import styled from "styled-components";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 769px) {
    height: 115vh;
  }
`;

const IntroContainer = styled.div`
  margin-top: 50px;
  height: 100%;
  scroll-snap-align: center;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 769px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

const IntroLeft = styled.div`
  flex: 1;
  position: relative;
  height: 700px;
  @media only screen and (max-width: 769px) {
   height: 100px;
   width: 60%;
   padding: 0;
  }
`;

const Title = styled.h1`
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  @media only screen and (max-width: 769px) {
    font-size: 15px;
  }
`;

const IntroRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 769px) {
    align-items: center;
    text-align: center;
    gap: 5px;
    transform: translateY(-50px);
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 769px) {
    gap: 5px;
  }
`;

const Line = styled.img`
  height: 2px;
`;

const SubTitle = styled.h2`
  color: #08f1a4;
  font-size: 17px;

  @media only screen and (max-width: 769px) {
    font-size: 12px;
  }
`;

const Description = styled.p`
  font-size: 15px;

  @media only screen and (max-width: 769px) {
    font-size: 11px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 40px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  transition: all 0.5s ease;

  @media only screen and (max-width: 769px) {
    width: 30px;
  }
`;

const IconLink = styled.a`
  width: 40px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  transition: all 0.5s ease;
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

  animation: ImgAnimation 2s infinite ease alternate;

  @keyframes ImgAnimation {
    100% {
      transform: translateY(-20px);
    }
  }

  @media only screen and (max-width: 769px) {
    width: 150px;
    height: 150px;
  }
`;

const Introduction = () => {
  return (
    <Section id="about">
      <IntroContainer>
        <IntroLeft>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.1} />
            <directionalLight position={[2, 3, 1]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                color="#08f1a4"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/spaceman.png" />
        </IntroLeft>

        <IntroRight>
          <Title>
            "Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand." - Martin Fowler
          </Title>
          <Info>
            <Line src="./img/line.png" />
            <SubTitle>About Me</SubTitle>
          </Info>
          <Description>
            I am a driven software developer with 1 year of experience and a
            diverse skill set in Python, Java, JavaScript, Git, HTML/CSS,
            Bootstrap, React, Nodejs, OOP, SQLite, PostgreSql, Kotlin, Spring
            boot and TDD. In my previous role as a technical mentor at
            WeThinkCode_, I successfully guided and mentored first-year
            students. My strengths include problem-solving, teamwork,
            leadership, mentoring, conflict resolution, customer service,
            marketing, and sales. I am dedicated to continuous learning and
            growth and seek new opportunities in a dynamic and challenging
            environment. I am open to discussing software development
            opportunities.
          </Description>
          <Icons>
            <IconLink
              href="https://www.linkedin.com/in/mekhail-meiring-26a284223/"
              target="_blank"
            >
              <Icon src="./img/icons/linkedin.png" />
            </IconLink>
            <IconLink
              href="https://www.instagram.com/_mekhail_meiring_/"
              target="_blank"
            >
              <Icon src="./img/icons/instagram.png" />
            </IconLink>
            <IconLink href="https://github.com/Mekhail-Meiring" target="_blank">
              <Icon src="./img/icons/github.png" />
            </IconLink>
          </Icons>
        </IntroRight>
      </IntroContainer>
    </Section>
  );
};

export default Introduction;