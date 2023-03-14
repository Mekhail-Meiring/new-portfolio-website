import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  padding: 1rem 0;
  font-size: 3.5rem;
  text-align: center;
  @media only screen and (max-width: 769px) {
    font-size: 2rem;
  }
`;

const projects = [
  {
    id: 1,
    image: "./img/WebWorkFlow.png",
    title: "WebWorkFlow",
  },
  {
    id: 2,
    image: "./img/room-finder.png",
    title: "Room-Finder",
  },
  {
    id: 3,
    image: "./img/the-main-events.png",
    title: "The-Main-Events",
  },
]



export const Projects = () => {

  return (
    <Container id="projects">
      <Heading>Projects</Heading>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
              <img src={project.image} alt={project.title} />
              <p style={
                {
                  textAlign: "center",
                }
              }>{project.title}</p>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </Container>
  );
};
