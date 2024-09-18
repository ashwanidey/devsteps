'use client'
import IDE from '@components/project_setup/editor/IDE'
import ProjectNavBar from '@components/project_setup/ProjectNavBar'
import Instructions from '@components/project_setup/Instructions'
import ProjectFooter from '@components/project_setup/ProjectFooter'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { useEffect, useState } from 'react'


const page = ({ params } : { params: { projectid: string }}) => {
  const [project,setProject] = useState<any|null>(null);
  const {data:session} = useSession();
  

  useEffect(() => {
    async function fetchData() {
      try {
        const options = {
          url: "/api/data/get_project",
          method: "post",
          data: { // axios expects `data` instead of `params` for POST request
            projectid: params.projectid,
            userid: session?.user,
          },
        };
        const response = await axios(options);
        setProject(response.data.project);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (params.projectid && session?.user) {
      fetchData();
    }
  }, [params.projectid, session?.user]);

  return (
    <>
    <ProjectNavBar/>
    <div className=''>
      {/* <MobileView/> */}
    <IDE project = {project}/>
    </div>
    <ProjectFooter/>
    </>
  )
}

export default page