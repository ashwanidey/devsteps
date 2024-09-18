"use client";
import React from "react";
import { BackgroundGradient } from "@components/ui/background-gradient";
import Link from "next/link";
import ReactMarkdown from 'react-markdown'



export default function Card({tags,heading,description,projectId} : {tags : string[],heading : string,description : string,projectId:string}) {
  

  return (
    <div className="h-full">
      <BackgroundGradient className="rounded-[22px]  p-4  sm:p-10 bg-white dark:bg-zinc-900 h-full">
      <div className="flex gap-4">
        {tags.map((tag : string,index) => {
          return (
          <button className="rounded-full px-4  py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800" key={index}>
          <span>{tag}</span>
          
        </button>
        )}
        )}
        
        </div>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-[700]">
        {heading}
        </p>

        <ReactMarkdown className="text-sm text-neutral-600 dark:text-neutral-400 space-y-4">
       {description}
        </ReactMarkdown>
        
        
        <Link href = {`/project/${projectId}`} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4 mb-0">
          Start Project
        </Link>
  
      
        
      </BackgroundGradient>
    </div>
  );
}
