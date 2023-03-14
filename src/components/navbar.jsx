import React from 'react'
import styled from 'styled-components'	

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


const Icon = styled.img`
    width: 20px;
    cursor: pointer;
    
`;

const Logo = styled.img`
    height: 170px;

`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    @media only screen and (max-width: 769px) {
        display: none;
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
  return (
    <Section>
        <NavContainer>
            <Links>
                <Logo src='./img/logo.png' />
                <List>
                    <ListItem>About</ListItem>
                    <ListItem>Skills</ListItem>
                    <ListItem>Experience</ListItem>
                </List>
            </Links>
            <Icons>
                <Button>Contact</Button>
            </Icons>
        </NavContainer>
    </Section>
  )
}
