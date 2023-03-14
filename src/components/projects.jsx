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
  padding: 4rem 1rem;
  margin: 0 auto;
`;

const Heading = styled.h1`
  padding: 1rem 0;
  font-size: 3.5rem;
  text-align: center;
`;

const projects = [
  {
    id: 1,
    image: "",
    title: "",
  },
  {
    id: 2,
    image: "",
    title: "",
  },
  {
    id: 3,
    image: "",
    title: "",
  },
]



export const Projects = () => {

  return (
    <Container>
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
        // spaceBetween={30}
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
