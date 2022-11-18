import React from 'react'

const Color = ({bgColor , onClick}) => {

    const divStyle = "inline-flex w-24 h-24 active:scale-95 rounded-full m-1 ring-2 ring-transparent shadow-md hover:ring-gray-300"  + bgColor ;     

    function onClick(){
        onClick()
        localStorage.setItem('lastColor', getElementById('my-node').styles.backgroundImage);
    }
  return (
    <div className={divstyle} onClick={clickFun}>

    </div>
  )
}

export default Color