'use client';
import React, { useEffect, useState } from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Card from './Card';
import axios from 'axios'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [projects,setprojects] = useState<any | []>([])
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    async function fetch(){
      setLoading(true)
      const response = await axios("/api/data/get_projects");
      setprojects(response.data.projects)
      setLoading(false);
    }
    fetch()
  },[])

  if(loading){
    return <></>
  }

  return (
    <div className="mt-20 md:px-20 px-10">
      <h2 className="relative z-20 text-5xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span>Master Code,</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            <span>Master Code,</span>
          </div>
        </div>
        {" "} One Step at a Time
      </h2>

      <div className="md:px-20 mt-8 md:overflow-x-hidden">
        <TextGenerateEffect
          words="Learn coding through step-by-step projects and interactive quizzes, building real-world skills at your own pace and tracking progress."
          duration={0.7}
          className="text-center text-[0.1rem] md:overflow-x-hidden"
        />
      </div>

      <div className="flex md:flex-row flex-col md:justify-around mt-20">
        <Carousel
          className="md:min-w-lg md:max-w-lg min-w-sm max-w-md -mx-14 md:mx-0"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-full">
            {projects?.map((project : any) => (
              <CarouselItem key={project?._id} className="h-full">
                <div className="md:py-12 md:px-20 py-11 px-14 ml-5">
                  <Card tags={project.tags} heading={project.name} description={project.smalldescription} projectId={project.projectid} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <Image
          src="/assets/bgimage.png"
          alt="logo"
          width={500}
          height={500}
          className="md:-mt-20"
        />
      </div>
    </div>
  );
}
