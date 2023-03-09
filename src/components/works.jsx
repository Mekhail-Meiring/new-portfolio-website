import React from 'react'

import styled from 'styled-components'


const skills = [
  {
    id: 1,
    icon: "./img/icons/backend.png",
    title: "Backend Development", 
  },

  {
    id: 2,
    icon: "./img/icons/frontend.png",
    title: "Frontend Development",
  },

  {
    id: 3,
    icon: "./img/icons/python.png",
    title: "Python",
  },

  {
    id: 4,
    icon: "./img/icons/java.png",
    title: "Java",
  },

  {
    id: 5,
    icon: "./img/icons/javascript.png",
    title: "JavaScript",
  },

  {
    id: 6,
    icon: "./img/icons/kotlin.png",
    title: "Kotlin",
  },

  {
    id: 7,
    icon: "./img/icons/react.png",
    title: "React",
  },

  {
    id: 8,
    icon: "./img/icons/springboot.png",
    title: "Springboot",
  },
];


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`; 

const WorksContainer = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
`;

const WorksLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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


export const Works = () => {
  return (
    <Section>
      <WorksContainer>
        <WorksLeft>
          <List>
            {skills.map((skill) => (
              <ListItem key={skill.id} >
                  <Icon src={skill.icon} />
                  <Skill text={skill.title}>{skill.title}</Skill>
              </ListItem>
            ))}
          </List>
        </WorksLeft>
        <WorksRight></WorksRight>
      </WorksContainer>
    </Section>
  )
}
