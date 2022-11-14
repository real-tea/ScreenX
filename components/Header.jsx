import {useState } from 'react'

const Header = () => {

    const [ isDarkMode , setIsDarkMode ] = useState(false); //darkMode State

  return (
    <div>
        <span>
            <p>Screen X</p>
        </span>
    </div>
  )
}

export default Header