import React from 'react'
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"

const Toolbar = ({ imagechange , img }) => {
  return (
    <>
      <div className="fixed bottom-0 w-full flex justify-center z-10 py-5">
          <div className="w-full sm:w-10/12 flex flex-wrap justify-center items-center gap-4">
    
            {!img && (
              <button
                className="transform p-4 flex font-semibold text-lg justify-center items-center px-8 rounded-full bg-purple-300 text-yellow-100 ease-in-out hover:bg-purple-300/90 group outline-none ring ring-purple-800 dark:ring-0"
                onClick={()=>document.getElementById("file_select").click()}>
                
                <ArrowUpTrayIcon className="w-6 mr-2 stroke-[2] group-hover:-rotate-3 group-active:rotate-3"/>

                Upload ScreenShot⚡
              </button>
            )}
          </div>

          <input
            id="file_select"
            type="file"
            className="hidden"
            onChange={imagechange}
            accept="image/*"
          />
      </div>
    </>
  )
}

export default Toolbar