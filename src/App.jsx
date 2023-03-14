import React, { lazy, Suspense } from "react";
import { Hero } from "./components/hero";
import styled from "styled-components";
import Projects from "./components/projects";

const Introduction = lazy(() => import("./components/introduction"));
const Skills = lazy(() => import("./components/skills"));
const Contact = lazy(() => import("./components/contact"));

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;
  background-image: url("./img/bg.jpeg");
`;

function App() {
  return (
    <Container>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Introduction />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
      <Projects />
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </Container>
  );
}

export default App;
