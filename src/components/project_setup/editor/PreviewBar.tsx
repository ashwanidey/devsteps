import React from 'react'

const PreviewBar = ({setTogglePreview,togglePreview} : {
  setTogglePreview: React.Dispatch<React.SetStateAction<boolean>>,
  togglePreview: boolean
}) => {
  return (
    <div className='flex gap-4 p-2 bg-[#0d0f12] border-b-[1px]'>
      <button onClick={()=>setTogglePreview(true)} className={`${togglePreview && 'border-b-[2px] border-yellow-200'}`}>Result</button>
      <button onClick={()=>setTogglePreview(false)} className={`${!togglePreview && 'border-b-[2px] border-yellow-200'}`}>Console</button>
    </div>
  )
}

export default PreviewBar