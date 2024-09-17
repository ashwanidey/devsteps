
import IDE from '@components/project_setup/editor/IDE'
import ProjectNavBar from '@components/project_setup/ProjectNavBar'
import Instructions from '@components/project_setup/Instructions'
import ProjectFooter from '@components/project_setup/ProjectFooter'

import MobileView from '@components/project_setup/MobileView'

import { react_project_data } from '@data/react_project_data'


const page = () => {
  const data = react_project_data[0];
  return (
    <>
    <ProjectNavBar/>
    <div className=''>
      {/* <MobileView/> */}
    <IDE files = {data.files}/>
    </div>
    <ProjectFooter/>
    </>
  )
}

export default page