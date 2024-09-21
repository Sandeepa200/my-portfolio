"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: 'https://www.youtube.com/channel/UCx52AOVxrBGGBzlRkysfBsA',
    name: <RiYoutubeFill/>
  },
  {
    path: 'https://www.linkedin.com/in/sandeepa-rambukwella',
    name: <RiLinkedinFill/>
  },
  {
    path: 'https://github.com/Sandeepa200',
    name: <RiGithubFill/>
  },
  {
    path: 'https://web.facebook.com/p/Sandeepa-Rambukwella-100082623686317/?_rdc=1&_rdr',
    name: <RiFacebookFill/>
  },
  // {
  //   path: '/',
  //   name: <RiInstagramFill/>
  // },

]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}> 
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
