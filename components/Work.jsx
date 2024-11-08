"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";

const projectCard = [
  {
    image: "/Work/3.png",
    category: "React js",
    name: "Ai Travel Planner",
    description:
      "Ai Travel Planner is a web application that uses the OpenAI API to generate travel plans based on user input.",
    link: "https://ai-travel-planner.netlify.app",
    github: "https://github.com/Sandeepa200/ai-travel-planner",
  },
  {
    image: "/Work/4.png",
    category: "React js",
    name: "Lady Blake Aramaya",
    description:
      "A Commercial Project Developed for a buddhist monastery in Sri Lanka",
    link: "https://ladyblakearamaya.com",
    github: "https://ladyblakearamaya.com",
  },
  {
    image: "/Work/2.png",
    category: "Next js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eaque.",
    link: "https://ladyblakearamaya.com",
    github: "https://ladyblakearamaya.com",
  },
  {
    image: "/Work/1.png",
    category: "Next js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eaque.",
    link: "https://ladyblakearamaya.com",
    github: "https://ladyblakearamaya.com",
  },
  {
    image: "/Work/4.png",
    category: "React js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eaque.",
    link: "https://ladyblakearamaya.com",
    github: "https://ladyblakearamaya.com",
  },
  {
    image: "/Work/3.png",
    category: "React js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eaque.",
    link: "https://ladyblakearamaya.com",
    github: "https://ladyblakearamaya.com",
  },
  {
    image: "/Work/2.png",
    category: "Next js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eaque.",
    link: "https://ladyblakearamaya.com",
    github: "https://ladyblakearamaya.com",
  },
  {
    image: "/Work/1.png",
    category: "Fullstack",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eaque.",
    link: "https://ladyblakearamaya.com",
    github: "https://ladyblakearamaya.com",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/*text*/}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left 
            mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Take a look at some of the recent work I've been involved in, showcasing my skills in web, mobile, and AI development.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider  */}  
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 4 projects in slider */}
            {projectCard.slice(0,4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
            ;
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
