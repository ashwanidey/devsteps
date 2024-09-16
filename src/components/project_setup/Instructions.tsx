import {react_project_data} from '@data/react_project_data'
import Markdown from 'markdown-to-jsx'
import ReactMarkdown from 'react-markdown'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundBeams } from "../ui/background-beams";





const project = react_project_data[0]


const Instructions = () => {
  return (
    
     
    <div className='dark:bg-background h-full overflow-y-auto '>
    
      <h1 className='text-2xl font-bold pl-6 p-3 sticky top-0  rounded-b-lg bg-zinc-900 '>Objectives</h1>
      
        
        
        <div className='p-6 flex flex-col space-y-4'>
        <div className='text-[2rem] font-[700] bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent'>{project.name}</div>
        <ReactMarkdown className='text-[1.2rem] font-[400] leading-7'>{project.description}</ReactMarkdown>
         
        
      </div>
      <h1 className='text-2xl font-bold sticky top-0 bg-zinc-900 pl-6 p-3 rounded-b-lg'>Tasks</h1>
      <ul className='p-6'>
        {project.checkpoints.map((task, index) => {
          return <li key={index} className='p-2'>
            <div className="inline-flex items-center -ml-3">
  <label
    className="relative flex cursor-pointer items-center rounded-full p-3"
    htmlFor="ripple-on"
    data-ripple-dark="true"
  >
    <input
      id="ripple-on"
      type="checkbox"
      className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
    />
    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-3.5"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
  </label>
  <label className="cursor-pointer text-slate-200 text-[1.3rem] font-[700]"
    htmlFor="ripple-on"
  >
    Task {index + 1}
  </label>
</div>
            <ReactMarkdown className="text-[1.1rem] flex flex-col gap-4 leading-7">{task.stepdescription}</ReactMarkdown>

          </li>
        })}
      </ul>
      
    </div>
    
   
  )
}

export default Instructions