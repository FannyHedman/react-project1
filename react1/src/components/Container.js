import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { DarkModeContext } from './DarkModeContext'
import '../App.css'
import { Routes, Route } from 'react-router-dom'
import StockPaintings from '../pages/StockPaintings'
import Paintings from './Paintings'
import Home from '../pages/Home'
import Exhibitions from '../pages/Exhibitions'
import ModernExhibit from '../pages/ModernExhibit'
import HistoricalExhibit from '../pages/HistoricalExhibit'

const Container = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className={darkMode ? `Dark-theme` : `Light-theme`}>

            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/paintings/:id" element={<Paintings />} />
                <Route path="/stockpaintings" element={<StockPaintings />} />
                <Route path="/exhibitions/" element={<Exhibitions />} />
                <Route path="/modernexhibit" element={<ModernExhibit />} />
                <Route
                    path="/historicalexhibit"
                    element={<HistoricalExhibit />}
                />
            </Routes>
        </div>
    )
}

export default Container
