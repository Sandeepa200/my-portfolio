"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiReactjsFill,
  RiFlutterFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import { FaPython } from "react-icons/fa";
import { SiCsharp, SiBlazor } from "react-icons/si";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import Particle from "./helper/Particle";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[100vh] xl:pt-11 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <Particle />
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text  */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Software Engineer
            </div>
            <h1 className="h1 mb-4">Hello, My Name Is Sandeepa Rambukwella</h1>
            <p className="subtitle max-w-[490px] mx-auto lg:mx-0">
              I'm a full-stack developer with expertise in web and mobile
              development with AI integrations, I bring innovative solutions to real-world problems, 
              blending creativity with cutting-edge technology. 
            </p>
            
            {/* buttons  */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2 ">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <a href="/hero/Resume-Sandeepa-Rambukwella.pdf" download="Resume-Sandeepa-Rambukwella.pdf">
                <Button variant="secondary" className="gap-x-2 ">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            {/* socials  */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image  */}
          <div className="hidden lg:flex relative">
            {/* badge 1  */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem] "
              icon={<RiReactjsFill />}
              endCountNum={1}
              badgeText="Web Apps"
            />
            {/* badge 2  */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem] "
              icon={<RiFlutterFill />}
              endCountNum={4}
              //endCountText="k"
              badgeText="Mobile Apps"
            />
            {/* badge 3  */}
            <Badge
              containerStyles="absolute top-[50%] -right-20 "
              icon={<FaPython />}
              endCountNum={4}
              //endCountText="k"
              badgeText="AI Projects"
            />
            {/* badge 4  */}
            <Badge
              containerStyles="absolute top-[75%] -right-0.5 "
              icon={<SiBlazor />}
              endCountNum={1}
              //endCountText="k"
              badgeText=".NET with Blazor "
            />
            {/* developer image  */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <div className="bg-hero_shape w-[510px] h-[462px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="w-[462px] h-[500px] relative -left-5"
              imgScr="/hero/dev-img-1.PNG"
            />
          </div>
        </div>
        {/* icons  */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
