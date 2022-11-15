import React from 'react'

const Toolbar = ({ imagechange , img }) => {
  return (
    <>
      <div className="fixed bottom-0 w-full flex justify-center z-10 py-5">
          <div className="w-full sm:w-10/12 flex flex-wrap justify-center items-center gap-4">
    
            {!img && (
              <button
                className="transform p-4 flex font-semibold text-lg justify-center items-center px-8 rounded-full bg-purple-300 text-yellow-100 ease-in-out hover:bg-purple-300/90 group outline-none ring ring-purple-800 dark:ring-0"
                onClick={()=>document.getElementById("file_select").click()}>
                Upload ScreenShot ⚡
              </button>
            )}
          </div>
      </div>
    </>
  )
}

export default Toolbar