
import IDE from '@components/project_setup/editor/IDE'
import ProjectNavBar from '@components/project_setup/ProjectNavBar'
import Instructions from '@components/project_setup/Instructions'
import ProjectFooter from '@components/project_setup/ProjectFooter'

import MobileView from '@components/project_setup/MobileView'


const page = () => {
  return (
    <>
    <ProjectNavBar/>
    <div className=''>
      {/* <MobileView/> */}
    <IDE/>
    </div>
    <ProjectFooter/>
    </>
  )
}

export default page