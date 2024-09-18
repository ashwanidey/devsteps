'use client'
import {
  SandpackProvider,
  SandpackPreview,
  SandpackLayout,
  SandpackConsole,
 
} from "@codesandbox/sandpack-react";
import MonacoEditor from "./MonacoEditor";
import './preview.css';

import SandpackFileExplorer from "./FileExplorer/src";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useEffect, useState } from "react";
import PreviewBar from "./PreviewBar";
import Instructions from "@components/project_setup/Instructions";
import { DragHandleDots2Icon } from '@radix-ui/react-icons'
import { useSession } from "next-auth/react";
import axios from "axios";



export default function IDE({params} : {params : any}) {
  const [showExplorer, setShowExplorer] = useState(false);
  const [togglePreview, setTogglePreview] = useState(true);
  const [project,setProject] = useState<any|null>(null);
  const [loading,setLoading] = useState<boolean>(false);
  const {data:session} = useSession();
  

  useEffect(() => {
    async function fetchData() {
      
      try {
        setLoading(true);
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

  
      fetchData();
    
  }, [loading]);
  return (
    <>
   
      <SandpackProvider template="react" theme="dark" files={project?.files} options={{
    recompileMode: "delayed",
    recompileDelay: 1000,
  }}>
        <SandpackLayout className="md:h-[calc(100vh-9rem)] h-[calc(100vh-5rem)] "> 
          <PanelGroup
      autoSaveId='example'
      direction='horizontal'
      className=' h-full'
    >
      <Panel minSizePercentage={5} className="" >
        <div className="h-full border-l-2 ">
        <Instructions project = {project}/>
        </div>
      </Panel>
      <PanelResizeHandle className='flex w-px items-center justify-center '>
        <div className='z-10 flex h-full w-[10px] items-center justify-center rounded-sm border '>
        <DragHandleDots2Icon className='h-5 w-5' />
        </div>
      </PanelResizeHandle>
        
      <Panel  >
        <div className="h-full flex w-full">
      {showExplorer && <SandpackFileExplorer />  }
        <div className="h-full border-l-2 w-full">
        <MonacoEditor setShowExplorer = {setShowExplorer} showExplorer={showExplorer}/>
        </div>
        </div>
      </Panel>

      <PanelResizeHandle className='flex w-px items-center justify-center '>
        <div className='z-10 flex h-full w-[10px] items-center justify-center rounded-sm border '>
        <DragHandleDots2Icon className='h-5 w-5' />
        </div>
      </PanelResizeHandle>

      <Panel minSizePercentage={5}>
        <div className="h-full">
          {/* <PreviewBar setTogglePreview={setTogglePreview} togglePreview = {togglePreview}/> */}
          <div className="p-4 h-full bg-background">
             <SandpackPreview
                showOpenInCodeSandbox={false}
                className= {`${!togglePreview && 'hidden'} h-full`}
              /> 
              {/* <SandpackConsole style={{borderRadius : "6px"
                }}  className= {`${togglePreview && 'hidden'}`}   maxMessageCount = {100} showHeader={false}/> */}
             
              </div>
              </div>
      </Panel>
    </PanelGroup>

    
        </SandpackLayout>
        </SandpackProvider>
    </>
  );
}
