import React from 'react'

const Resizer = ({app , label , aspect, ring = false}) => {

    function resizerFun(){
        document.getElementById("my-node").style.aspectRatio = false;
        document.getElementById("my-node").click();
    }

  return (
    <div 
        className="w-28 aspect-square text-sm flex flex-col justify-center items-center cursor-pointer group text-center"
        onClick = {resizerFun}>

        <div className="w-16 aspect-square rounded hover:shadow-none group-active:scale-95 ease-in-out duration-200 p-2"
        >
        <img
            src={`/icons/icons/${app}.png`}
            alt={label}
            className={`rounded-fill shadow-md hover:scale-105 ${
                ring && "ring-2"
            } ring-[#9D00FF]`}
        />

        </div>
        
            {label}
    </div>
  )
}

export default Resizer