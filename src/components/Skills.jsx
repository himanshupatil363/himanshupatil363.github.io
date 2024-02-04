import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import html from "../assets/html.png";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";

const Skills = () => {
  const skills = [
    { title: "HTML", image: require(`../assets/html.png`) },
    { title: "CSS", image: require(`../assets/css.png`) },
    { title: "JAVASCRIPT", image: require(`../assets/js.png`) },
    { title: "REACT", image: require(`../assets/react.png`) },
    { title: "NODE", image: require(`../assets/node.png`) },
    { title: "EXPRESS", image: require(`../assets/express.jpeg`) },
    { title: "MONGODB", image: require(`../assets/mongodb.jpg`) },
    { title: "TAILWIND", image: require(`../assets/tailwind.jpeg`) },
    { title: "AZURE", image: require(`../assets/azure.png`) },
  ];

  return (
    <div>
      <div className="flex items-center flex-col mt-48">
        <div className="text-[#AD9ED9] font-semibold text-lg">Skills</div>
        <div className="text-3xl md:text-5xl font-semibold mt-2">
          Proficiencies on Display
        </div>
      </div>
      <div className="swiper-container my-36">
        <div className="swiper-wrapper">
          <Swiper
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 30,
              },
            }}
            freeMode={true}
            speed={6000}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="swiper-skill-card bg-[#f5f0eb]  dark:bg-gray-600 rounded-lg border dark:border-gray-600 border-[#f5f0eb]">
                  <div
                    className="swiper-skill-image"
                    style={{ backgroundImage: `url(${skill.image})` }}
                  ></div>
                  <div className="swiper-skill-title shadow text-black dark:text-white text-2xl">
                    {skill.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skills;
