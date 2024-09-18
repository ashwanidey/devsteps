'use client'
import IDE from '@components/project_setup/editor/IDE'
import ProjectNavBar from '@components/project_setup/ProjectNavBar'
import Instructions from '@components/project_setup/Instructions'
import ProjectFooter from '@components/project_setup/ProjectFooter'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { useEffect, useLayoutEffect, useState } from 'react'
import { redirect } from 'next/navigation'


const page = ({ params } : { params: { projectid: string }}) => {
  const {data : session} = useSession();
  useLayoutEffect(()=>{
    if(!session?.user)
      return redirect('/sign-in')
  },[session])

  return (
    <>
    <ProjectNavBar/>
    <div className=''>
      {/* <MobileView/> */}
    <IDE params = {params}/>
    </div>
    <ProjectFooter/>
    </>
  )
}

export default page