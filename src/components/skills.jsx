import React, { useState } from 'react'

import styled from 'styled-components'

import Java from './skills/java'
import Javascript from './skills/javascript'
import Kotlin from './skills/kotlin'
import Python from './skills/python'
import Reactjs from './skills/react'
import SpringBoot from './skills/spring-boot'


const skills = [
  {
    id: 1,
    icon: "./img/icons/python.png",
    title: "Python",
  },

  {
    id: 2,
    icon: "./img/icons/java.png",
    title: "Java",
  },

  {
    id: 3,
    icon: "./img/icons/javascript.png",
    title: "Javascript",
  },

  {
    id: 4,
    icon: "./img/icons/kotlin.png",
    title: "Kotlin",
  },

  {
    id: 5,
    icon: "./img/icons/react.png",
    title: "React",
  },

  {
    id: 6,
    icon: "./img/icons/springboot.png",
    title: "Springboot",
  },
];


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  justify-content: center;
  text-align: center;
`; 

const WorksContainer = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  transform: translateY(-40px);
`;

const WorksLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 150px;
`;

const List = styled.ul`

  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

`;

const ListItem = styled.li`

  display: flex;
  align-items: center;
  gap: 20px;

  
`;

const WorksRight = styled.div`
  flex: 1;

`;

const Icons = styled.div`
    
`;


const Icon = styled.img`
    width: 40px;
    cursor: pointer;

    animation: animateIcon 2s infinite ease-in-out alternate;

    @keyframes animateIcon {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(5deg); }
      50% { transform: rotate(0eg); }
      75% { transform: rotate(-5deg); }
      100% { transform: rotate(0deg); }
    }
`;

const Skill = styled.div`

  position: relative;

  font-weight: bold;
  font-size: 25px;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff;
  cursor: pointer;

  animation: colorChange 2s infinite ease-in-out alternate;

  @keyframes colorChange {
    100% {
      color: #08f1a4;
    }
  }

  :hover {
    transform: translateX(10px);
  }
  transition: all 0.5s ease;

`;

const Title = styled.h1`
  display: inline-block;
  transform: translateY(70px);
  position: relative;
  font-size: 50px;
  font-weight: lighter;
  margin: 0;
  padding: 0;
`


export const Skills = () => {

  const [work, setWork] = useState("Python");

  return (
    <Section>
      <Title>
        Skills
      </Title>
      <WorksContainer>
        <WorksLeft>
          <List>
            {skills.map((skill) => (
              <ListItem key={skill.id} onClick={() => {setWork(skill.title)}}>
                  <Icon src={skill.icon} />
                  <Skill text={skill.title}>{skill.title}</Skill>
              </ListItem>
            ))}
          </List>
        </WorksLeft>
        <WorksRight>

          {work === "Python" ? (
            <Python />
          ) : work === "Java" ? (
            <Java />
          ) : work === "Javascript" ? (
            <Javascript />
          ) : work === "Kotlin" ? (
            <Kotlin />
          ) : work === "React" ? (
            <Reactjs />
          ) :  (
            <SpringBoot />
          )}

        </WorksRight>
      </WorksContainer>
    </Section>
  )
}
