import {useState } from 'react';
import { SunIcon , MoonIcon , ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';

const Header = () => {

    const [ isDarkMode , setIsDarkMode ] = useState(false); //darkMode State

    const ChangeTheme=()=>{
      alert(isDarkMode);
    }

  return (
    <div className="w-full flex items-center relative justify-between p-6 text-yellow-900 dark:text-yellow-300">
        <span className="flex items-center">
            <p className = "text-2xl sm:text-5xl font-medium text-purple-900 cursive rounded-md px-3 py-4 ">
            Screen X
            </p>
        </span>

        {/* Dark Mode Button */}
        <div className="absolute right-6 flex">
          <button
          className="active:scale-50 transition-transform ease-in-out outline-none sm:mr-4"
          onClick={ChangeTheme}>
          {isDarkMode? (
            <SunIcon className="w-7 stroke-[2] mr-0.5"/>
          ) : (
            <MoonIcon className="w-7 stroke-[2] fill-purple-300"/>   
          )}

          </button>

          <a href="www.github.com/real-tea"
             className="flex justify-center items-center p-3 px-6 bg-purple-300 text-purple-900 font-bold rounded-full shadow-lg hover:shadow-yellow-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100 scale-75 -mr-6 md:mr-0 sm:scale-100 outline-none ring ring-yellow-300 dark:ring-0"
             target="_blank">
            Github
          </a>
        </div>
    </div>
  )
}

export default Header