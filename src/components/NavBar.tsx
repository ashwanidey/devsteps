'use client'

import { useEffect } from "react"
import DarkModeButton from "./DarkModeButton"

import {
  LogOut,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const NavBar = () => {

  
  return (
    <>
  
<nav className="fixed w-full z-50 top-0 start-0 bg-clip-padding  backdrop-blur-lg bg-opacity-80
">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      {/* <Image src="https://flowbite.com/docs/images/logo.svg" width={30} height= {30} alt="Flowbite Logo"/> */}
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DevSteps</span>
  </a>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium borderrounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
      <li>
        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Projects</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Quiz</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
      </li>
     
    </ul>
  </div>
  <div className="md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse hidden gap-4">
  
  
  <button className="p-[2px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-7 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Sign-In
  </div>
</button>
  
    
        
      
      <DarkModeButton />
    
  </div>
    
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:hidden gap-2">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <button  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open main menu</span>
        <div>
        {/* <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg> */}
        Menu
        </div>
    </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
      <DropdownMenuItem>
        Projects
      </DropdownMenuItem>
      <DropdownMenuItem>
        Quizzes
        </DropdownMenuItem>
        
        <DropdownMenuItem>
  
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
        
        </DropdownMenuContent>
    </DropdownMenu>
    <div className="md:hidden">
    <DarkModeButton />
    </div>
    </div>
  </div>
 
  
</nav>

    </>
  )
}

export default NavBar