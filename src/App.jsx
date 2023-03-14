import { Contact } from './components/contact'
import { Hero } from './components/hero'
import { Introduction } from './components/introduction'
import { Skills } from './components/skills'
import { Projects } from './components/projects'
import styled from 'styled-components'


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
  color: white;
  background-image: url("./img/bg.jpeg");
`; 


function App() {
  

  return (
    <Container>
      <Hero />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  )
}

export default App
