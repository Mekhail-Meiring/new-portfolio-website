import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import Map from './map';
import emailjs from '@emailjs/browser';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`; 

const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const ContactLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
`;

const Title = styled.h1`
  font-weight: lighter;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
`;

const Input = styled.input`
  padding: 10px;
  background-color: #272626;
  border: none;
  border-radius: 5px;
  color: white;

  :focus{
    outline-color: #08f1a4;
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #272626;
  border: none;
  border-radius: 5px;
  color: white;

  :focus{
    outline-color: #08f1a4;
  }
`;

const Button = styled.button`
  background-color: #08f1a4;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  :hover {
        transform: scale(1.04);
    }
    transition: all 0.5s ease;
`;


const ContactRight = styled.div`
  flex: 1;
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

const Icon = styled.img`
  width: 40px;
  cursor: pointer;

  animation: animate 1s infinite ease-in-out alternate;

  @keyframes animate {
    to {
      transform: scale(1.1);
    }
  }
`;


const Text = styled.div``;


export const Contact = () => {

  const form = useRef();

  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ed1vmoj', 'template_tq616hd', form.current, 'aUzjj2vlYtfjA6uEZ')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
  }

  return (
    <Section>
      <ContactContainer>
        <ContactLeft>
          <Title>Get in touch</Title>
          <List>
            <ListItem>
              <Icon src="./img/icons/call.png" />
              <Text>+27 62 095 7463</Text>
            </ListItem>
            <ListItem>
              <Icon src="./img/icons/gmail.png" />
              <Text>123mekhailmeiring@gmail.com</Text>
            </ListItem>
            <ListItem>
              <Form ref={form} onSubmit={handleSubmit}>
                <Input type="text" placeholder="Name" name='name'/>
                <Input type="text" placeholder="Email" name='email'/>
                <TextArea placeholder="Message" rows={8} name='message'/>
                <Button type='submit'>
                  <Text>Send</Text>
                  <Icon src="./img/icons/send.png" style={{width: "25px"}}/>
                </Button>
                {success && <span>Thanks, I'll reply ASAP :)</span>}
              </Form>
            </ListItem>
          </List>
        </ContactLeft>

        <ContactRight>
          <Map />
        </ContactRight>
        
      </ContactContainer>
    </Section>
  )
}
