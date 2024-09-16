'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IDE from './editor/IDE'


const MobileView = () => {
  const [showWindow, setShowWindow] = React.useState('objectives')
  return (
    <div className='flex flex-col justify-center items-center md:hidden'>
      <Tabs defaultValue="objectives" className="flex flex-col justify-center items-center ">
    <TabsList>
      <TabsTrigger value="Objectives" onClick={()=>setShowWindow('objectives')}>Objectives</TabsTrigger>
      <TabsTrigger value="Editor" onClick={()=>setShowWindow('Editor')}>Editor</TabsTrigger>
      <TabsTrigger value="Preview" onClick={()=>setShowWindow('Preview')}>Preview</TabsTrigger>
    </TabsList>
    <TabsContent value="Objectives"><IDE /></TabsContent>
    <TabsContent value="Editor" ><IDE /></TabsContent>
    <TabsContent value="Preview"><IDE /></TabsContent>
  </Tabs>
  </div>
  )
}

export default MobileView