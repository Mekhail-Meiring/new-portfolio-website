import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

const NavContainer = styled.div`
  width: 870px;
  padding: 50px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


const Logo = styled.img`
  height: 170px;
  @media only screen and (max-width: 769px) {
    height: 150px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 769px) {
    gap: 10px;
    padding: 0;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-weight: bold;

  :hover {
    color: #08f1a4;
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #08f1a4;
  width: 100px;
  border-radius: 7px;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
  transition: all 0.5s ease;
`;


export const Navbar = () => {
  const navigateToAbout = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  const navigateToSkills = () => {
    document.querySelector("#skills").scrollIntoView({ behavior: "smooth" });
  };

  const navigateToContact = () => {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <NavContainer>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem onClick={navigateToAbout}>About</ListItem>
            <ListItem onClick={navigateToSkills}>Skills</ListItem>
          </List>
        </Links>
        <Icons>
          <Button onClick={navigateToContact}>Contact</Button>
        </Icons>
      </NavContainer>
    </Section>
  );
};
