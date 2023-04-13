import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { DarkModeContext } from './DarkModeContext'
import '../App.css'
import DarkModeSwitch from './DarkModeSwitch'

const Container = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className={darkMode ? `Container-dark` : `Container-light`}>
            <DarkModeSwitch />
            <Navbar />
        </div>
    )
}

export default Container
