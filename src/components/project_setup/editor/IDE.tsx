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
import { useState } from "react";
import PreviewBar from "./PreviewBar";
import Instructions from "@components/project_setup/Instructions";
import { DragHandleDots2Icon } from '@radix-ui/react-icons'



export default function IDE({files} : {files : any}) {
  const [showExplorer, setShowExplorer] = useState(false);
  const [togglePreview, setTogglePreview] = useState(true);
  return (
    <>
   
      <SandpackProvider template="react" theme="dark" files={files} options={{
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
        <Instructions/>
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
