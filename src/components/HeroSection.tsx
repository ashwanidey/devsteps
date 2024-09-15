'use client'
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import Card from "./Card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const data = [
  {
    tags : ["React","JSX"],
    heading : "Authorization Form",
    description : `A client just called you to say that they love their new website! There’s only one problem: they don’t like how their contact page displays their personal information for all to see. They’ve asked you to hide their website’s contact page behind a password form. In this project, you’ll accomplish this by creating a React component to set up a simple authorization layer.`
  },
  {
    tags : ["React","JSX"],
    heading : "Passing Thoughts",
    description : `What if you could post something and know it wouldn’t live forever? In this project, we’ll build a place for our passing thoughts. Once you add a short thought, it’ll disappear after just 15 seconds.`
  }
]


export default function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="mt-20 md:px-20 px-10 ">
    
      <h2 className="relative z-20 text-5xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
      <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r  from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Master Code,</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 ">
            <span className="">Master Code,</span>
          </div>
        </div>
        
        {" "} One Step at a Time
        
      </h2>
      <div className="md:px-20 mt-8 md:overflow-x-hidden">
      <TextGenerateEffect words={"Learn coding through step-by-step projects and interactive quizzes, building real-world skills at your own pace and tracking progress."} duration={0.7} className="text-center text-[0.1rem] md:overflow-x-hidden"></TextGenerateEffect>
      </div>

      <div className="flex md:flex-row flex-col md:justify-around mt-20 ">
      <Carousel className=" md:min-w-lg md:max-w-lg min-w-sm max-w-md -mx-14 md:mx-0 " 
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      >
      <CarouselContent className="h-full ">
      {data.map((item,index) => {
        return <CarouselItem key={index} className="h-full">
          <div className="md:py-12 md:px-20 py-11 px-14 ml-5">
        <Card tags = {item.tags} heading = {item.heading} description={item.description}/>
        </div>
        </CarouselItem>
      })}
     
      </CarouselContent>
      <div className="hidden md:block">
      <CarouselPrevious />
      <CarouselNext />
      </div>
      
      
      </Carousel>
      
    
      <Image src="/assets/bgimage.png" alt='logo'
          width={500}
          height={500}  className="md:-mt-20"/>
        
          </div>
      
    </div>
  );
}
