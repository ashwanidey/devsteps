"use client"


import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import Image from "next/image"

export default function DarkModeButton() {
  const { setTheme,theme } = useTheme()
  const [isDark, setIsDark] = useState(theme === 'dark')

  const toggleTheme = () => {
    setIsDark(prev=>!prev)
    setTheme(isDark ? 'dark' : 'light')
  }



  

  return (
    <button type = "button" onClick={()=>toggleTheme()}>
     <Image src={theme === 'light' ? "/assets/themes.png" : "/assets/themes-dark.png"} alt="Theme" width={30} height={30} />
    </button>
    
  )
}
