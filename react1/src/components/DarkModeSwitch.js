import React, { useContext } from 'react'
import { DarkModeContext } from './DarkModeContext'

const DarkModeSwitch = () => {
    const { toggleDarkMode } = useContext(DarkModeContext)
    const handleClick = () => {
        toggleDarkMode()
    }
    return (
        <div>
            <button onClick={handleClick}>Dark Mode</button>
        </div>
    )
}

export default DarkModeSwitch
