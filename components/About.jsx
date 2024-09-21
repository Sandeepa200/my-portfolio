import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  University,
} from "lucide-react";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Sandeepa Rambukwella",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+9478 386 3533",
    },
    {
        icon: <MailIcon size={20} />,
        text: "chemilthas@gmail.com",
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on 04 Jan, 2000",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Bachelor of Software Engineering (BSE) at Open University of Sri Lanka",
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Kandy, Central, Sri Lanka",
    },
];

const qualificationData = [
    {
        title: "experience",
        data: [
            {
                company: "Glenzsoft (Pvt) ltd",
                designation: "Junior Software Engineer",
                years: "Mar 2024 - Present (7 months)",
            },
            {
                company: "Intern Software Engineer",
                designation: "SoftMaster (Pvt) ltd",
                years: "Dec 2023 - Feb 2024 (3 months)",
            },
            {
                company: "IBA Campus",
                designation: "IT Lecturer (trainee)",
                years: "Mar 2023 - Nov 2023  (9 months)",
            },
            {
                company: "IBA Campus",
                designation: "IT Support Specialist",
                years: "Sep 2022 - Mar 2023 (7 months)",
            },
        ]
    },
    {
        title: "education",
        data: [
            {
                university: "Open University of Sri Lanka",
                qualification: "Bachelor of Software Engineering (BSE)",
                years: "2021 - 2025",
            },
            {
                university: "Pahanmi e University of Sri Lanka",
                qualification: "Diploma in Artificial Intelligence (AI)",
                years: "2024 - 2025",
            }
        ]
    }
    
];

const skillData = [
    {
        title: "Skills",
        data: [
            {
                category: "Fullstack Development",
                name: "ASP.NET Core, Blazer, C#, Node.js, Java, React, Next.js, Tailwind, HTML, CSS, JavaScript, Git, Github, Gitlab, SQL, Mongo DB, Firebase"
            },
            {
                category: "Mobile Application Development",
                name: "Flutter, .NET MAUI, Xamarin, React Native, JAVA"
            },
            {
                category: "AI application Development",
                name: "Python, PyTorch, Llama Models, OpenAI GPT-models, Cloudflare API"
            },
            
        ],
    },
    {
        title: "Tools",
        data: [
            {
                imgPath : "/about/vscode.svg"
            },
            {
                imgPath : "/about/visual-studio.svg"
            },
            {
                imgPath : "/about/android-studio.svg"
            },
            {
                imgPath : "/about/figma.svg"
            }
        ],
    }
];
const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
                <div className="flex flex-col xl:flex-row">
                    {/*Image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" 
                        imgScr="/about/dev-img2.png" />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full mx-auto xl:mx-0 grid lg:grid-cols-3 lg:max-w-[520px] lg:border dark:border-none">
                                <TabsTrigger className="w-[162px xl:w-auto]" value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className="w-[162px xl:w-auto]" value="qualifications">Qualifications</TabsTrigger>
                                <TabsTrigger className="w-[162px xl:w-auto]" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className="text-lg mt-12 xl:mt-8 ">
                                {/* personal  */}
                                <TabsContent value="personal" >
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Unmatched Service Quality for Over 10 Years</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                            I specialize in crafting intuitive websites with
                                            cutting-edge technology, delivering dynamic and engaging
                                            user experiences.
                                        </p>
                                        {/* icons */}
                                        <div className="max-w-xs lg:max-w-[520px] mx-auto xl:mx-0 grid lg:grid-cols-2 gap-4 mb-12 ">
                                            {infoData.map((item, index) => {
                                                return ( 
                                                    <div className="flex items-center gap-x-4  lg:mx-0" key={index}>
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div className="text-left">{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div>English, Sinhala</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualification */}
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My awesome journey</h3>
                                        {/* experience & education wrapper */}
                                        <div className="grid md:grid-cols-2 gap-y-8 ">
                                            {/* experience */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase/>
                                                    <h4 className="capitalize font-medium"> 
                                                        {getData(qualificationData, "experience").title}
                                                    </h4>
                                                </div>
                                                {/* list  */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, "experience").data.map((item, index) => {
                                                        const {company, designation, years} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                                                    group-hover:translate-y-[84px] transition-all duration-500"/>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{designation}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28}/>
                                                    <h4 className="capitalize font-medium"> 
                                                        {getData(qualificationData, "education").title}
                                                    </h4>
                                                </div>
                                                {/* list  */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, "education").data.map((item, index) => {
                                                        const {university, qualification, years} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                                                    group-hover:translate-y-[84px] transition-all duration-500"/>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* skills  */}
                                <TabsContent value="skills">
                                    <div className="text-left">
                                        <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                                        {/* skills  */}
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* skills list  */}
                                            <dir>
                                            {getData(skillData, "Skills").data.map((item, index) => {
                                                    const {category, name} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                                                group-hover:translate-y-[84px] transition-all duration-500"/>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{category}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{name}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </dir>
                                        </div>
                                        {/* tools  */}
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* tools list  */}
                                            <dir className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(skillData, "Tools").data.map((item, index) => {
                                                        const {imgPath} = item;
                                                        return (
                                                            <div key={index}>
                                                                <Image src={imgPath} width={48} height={48} alt="" priority/>
                                                            </div>
                                                        );
                                                    })}
                                            </dir>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
