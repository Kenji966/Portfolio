"use client";
import React from "react";
import Image from "next/image";
import  {Spotlight } from "./components/ui/Spotlight";
import { FlipWords } from "./components/ui/flip-words";
import { Carousel, Card } from "./components/ui/apple-cards-carousel";
import { FloatingNav } from "./components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { CodeIcon } from "lucide-react";
import {ImagesSlider} from "./components/ui/images-slider";
import { motion } from "framer-motion";
import { CardStack } from "./components/ui/card-stack";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { Button } from "./components/ui/button"
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import { LinkPreview } from "./components/ui/link-preview";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MailIcon ,PhoneIcon, LocateIcon, PhoneOutgoing  } from "lucide-react";

import { debug } from "console";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Dard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { Skill: "Web Frount-End Dev", Proficiency: 210 },
  { Skill: "Game Dev", Proficiency: 273 },
  { Skill: "AR application", Proficiency: 250 },
  { Skill: "Database/CMS", Proficiency: 190 },
  { Skill: "Design", Proficiency: 214 },
  { Skill: "Coding-Foundations", Proficiency: 250 },
]
const chartConfig = {
  Proficiency: {
    label: "Proficiency",
    color: "#60a5fa",
  },
} satisfies ChartConfig




export default function Home() {

  const [position, setPosition]= React.useState("bottom")
  const words = ["Game", "Web"];
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "#project",
      icon: <CodeIcon className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
  ];
  
  const handleItemClick = (value: string) => {
    window.location.hash = '#project';
    setPosition(value);
    window.location.hash = value;
  };


  const images = [
    "/Game2.gif",
    "/Game2.gif",
    "/Game2.gif",];


    const introduction = `I am a versatile technology professional with a solid foundation in game development, augmented reality (AR), and full-stack programming. My skills range from creating engaging games with Unity and C# to developing immersive AR experiences using tools like SparkAR and AR.js. I also build robust web applications and manage databases effectively. My passion for new technologies and commitment to high-quality results drive me to continually enhance my skills and stay updated with industry trends.`;
   
  return (
    <div className="overflow-x-hidden">
      
    
    <FloatingNav navItems={navItems} />
    <div className="h-[14rem] md:h-[24rem] w-full rounded-md flex flex-col items-center justify-center antialiased relative overflow-x-hidden bg-black">
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />
      <section id="Home" className="section">
      <div className="h-full w-full  flex items-center justify-center">
      <br />
    <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 bg-opacity-50">
    <FlipWords words={words}/> Developer <br /> Portforlio

      </h1>
    </div></section> 
      <br />
      <div className="text-sm md:text-sm text-center bg-clip-text from-white max-w-screen-sm mx-auto">
      <TypewriterEffectSmooth words={TypeWords} />
    </div>
  </div>

  <ImagesSlider className="h-[75rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50  bg-opacity-50">
        My Project
      </h2>
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          
<section id="project" className="section">    
  <Carousel items={cards} />
</section>
        </motion.p>
        
      </motion.div>
    </ImagesSlider>
    
<section id="about">    

<br/>
<br/>
<div className="md:gap-4 gap-16">
<h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50  bg-opacity-50">
  Who AM I ?
    <br/>
  </h2>
  <h2 className="text-sm md:text-sm text-center bg-clip-text from-white max-w-screen-sm mx-auto">
    <TextGenerateEffect words={introduction} />
    <br/>
    <br/>
    <br/>
    </h2></div>
  <div className="flex flex-col md:flex-row md:gap-4 gap-16 justify-center items-center">
  <div className="flex flex-col md:flex-row md:gap-4 gap-16 justify-center items-center w-full max-w-7xl">
  {/* CardStack 部分 */}
  <div className="flex-1 flex justify-center">
    <div className="w-full max-w-[450px]">
      <CardStack items={CARDS} />
    </div>
  </div>
    <br/>
    <br/>
  {/* 雷达图部分 */}
    <div className="flex-1 flex items-center justify-center"> 
      <div className="border-none flex items-center justify-center w-full max-w-[450px] h-[450px]">
      <Dard className="border-none relative">   
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-2xl font-bold">Skills</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="flex items-center justify-center">
          <ChartContainer
            config={chartConfig}
            className="w-[450px] h-[450px]"
          >
            <RadarChart data={chartData}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <PolarGrid className="fill-[--color-Proficiency] opacity-20" />
              <PolarAngleAxis dataKey="Skill" tick={{ fontSize: 7.5 }} />
              <Radar
                dataKey="Proficiency"
                fill="var(--color-Proficiency)"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Dard>
  </div>
</div>
  <br/>
  </div>
  </div>
  <br/>

  <br/>
  <br/>

</section>


<div className="md:gap-16 gap-16">
<section id="contect">  
  <div className="h-auto md:h-[27rem] w-full rounded-md flex flex-col items-center justify-center antialiased relative overflow-auto bg-black">
    <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50  bg-opacity-50">
      <br />   
      Contect Me
      <br />
      <br />
    </h2> 
    <br />
    <div className="flex flex-wrap md:flex-nowrap md:justify-center justify-center items-center gap-8 md:gap-24">
      <h1 className="text-2xl md:text-4xl mb-4 md:mb-0 flex items-center">
        <LinkedInLogoIcon className="size-16 mr-2" /> 
        <LinkPreview url="https://www.linkedin.com/in/wai-kin-ma-201a89299/" className="font-bold text-2xl"> 
          LinkedIn
        </LinkPreview>
      </h1>
      <h2 className="text-2xl md:text-4xl mb-4 md:mb-0 flex items-center">
        <GitHubLogoIcon className="size-16 mr-2" /> 
        <LinkPreview url="https://github.com/yourusername" className="font-bold text-2xl"> 
          GitHub
        </LinkPreview>
      </h2>
      <div className="flex items-center text-2xl md:text-4xl mb-4 md:mb-0">
        <MailIcon className="size-16 mr-2" /> 
        <LinkPreview url="mailto:kin.ma9225@gmail.com" className="font-bold text-lg"> 
          kin.ma9225@gmail.com
        </LinkPreview>
      </div>
      <div className="flex items-center text-2xl md:text-4xl mb-4 md:mb-0">
        <PhoneIcon className="size-16 mr-2" /> 
        <a href="tel:+447575856616" className="font-bold text-sm">
          +44 7575 856 616
        </a>
      </div>
      <div className="flex items-center text-2xl md:text-4xl mb-4 md:mb-0">
        <LocateIcon className="size-16 mr-2" /> 
        <a href="#" className="font-bold text-sm">
          London, UK
        </a>
      </div>
    </div>
    <br />
    <div></div>
  </div>
</section>
  </div>
</div>
)
};


const TypeWords = [
  {
    text: "Hello !",
  },
  {
    text: "I'm",
  },
  {
    text: "Wai Kin",
  },
  {
    text: "Ma.",
    className: "text-blue-500 dark:text-blue-500",
  },
];


const data = [
  {
    category: "AAA",
    title: "AAA",
    src: "/Game2.gif",  
    content: <div></div> 
  },
  {
    category: "BBB",
    title: "BBB",
    src: "/Game2.gif",   
    content: <div></div> 
  },
  {
    category: "CCC",
    title: "CCC",
    src: "/Game2.gif",   
    content: <div></div> 
  },
 
  {
    category: "Product",
    title: "DDD",
    src: "/Game2.gif",   
    content: <div></div> 
  },
];

const CARDS = [
  {
    id: 0,
    name: "Web Frount-End Development",
    designation: "",
    content: (
      <p>
      I am passionate about <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">Front-End Development</a>, 
      specializing in<a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">HTML5 & JavaScript</a> . 
      My experience in game design enhances my ability to create engaging and user-friendly Web experiences.
      <br/><br/>
      I’ve used  <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">Next.js</a> to build my portfolio, showcasing my enthusiasm for modern Web technologies. 
      Additionally, I have experience with <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">CMS & MySQL</a> , supporting my skills in creating complete Web solutions.
      </p>
    ),
  },
  {
    id: 1,
    name: "Game Development",
    designation: "",
    content: (
      <p>
    I specialize in Unity game development with <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">C#</a> , focusing on creating engaging gameplay and interactive experiences. 
    I excel in<a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">Game mechanics, Physics, Animations</a> , and <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">UI Design</a> , optimizing performance to ensure smooth gameplay and high user engagement.
     <br/><br/>
     I am passionate about diverse platform and mode experiences, including<a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5"> PC, Web, Mobile</a>, and <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5"> AR</a>.
     I enjoy exploring new technologies and continuously refining my work based on player feedback to ensure exceptional visual and interactive experiences.
      </p>  
    ),
  },
  {
    id: 2,
    name: "AR (Augmented Reality) Development",
    designation: "",
    content: (
      <p>
      I specialize in developing AR applications using tools like <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">SparkAR, AR.js, AR Foundation</a>, and <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">Niantic Lightship ARDK</a>. 
      My focus is on creating immersive and interactive AR experiences with features such as real-time data overlays.
      <br/><br/>
      I design AR solutions for various applications, including <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">Marketing</a> and <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">Education</a> , 
      blending technology with creativity to craft unique and engaging user experiences. 
      I continually explore new technologies to enhance and refine AR interactions, ensuring each project delivers exceptional and innovative results.
      </p>
    ),
  },
  {
    id: 3,
    name: "Strong Programming and IT Foundations",
    designation: "",
    content: (
      <p>
      I am proficient in <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">Object-Oriented Programming (OOP) </a>and <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">Data Structures</a>, with experience in <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">Game Dev, Web Dev, Java</a>, and <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">Python</a> . 
      I leverage this knowledge to enhance software performance and development efficiency.
      <br/><br/>
      I apply theoretical concepts to real-world projects, optimizing system performance and developing scalable applications. 
      Beyond programming, I have a foundation in <a className="font-bold bg-emerald-100 text-blue-500 dark:bg-emerald-700/[0.2] dark:text-blue-300 px-1 py-0.5">IT Hardware and Networking</a> , and I am excited about exploring various technology fields.
      </p>
    ),
  },
];
