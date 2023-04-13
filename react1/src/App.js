import './App.css'
// import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Exhibitions from './pages/Exhibitions'
import ModernExhibit from './pages/ModernExhibit'
import HistoricalExhibit from './pages/HistoricalExhibit'
// import Navbar from './Navbar'
import { DarkModeProvider } from './components/DarkModeContext'
import Container from './components/Container'
// import ContextLayout from './components/ContextLayout'
// import Layout from './components/Layout'

// createBrowserRouter
// import { createHashRouter, RouterProvider } from 'react-router-dom'

function App() {
    return (
        <>
            <DarkModeProvider>
                <Container />

            {/* <div>
                    <Navbar />
                </div> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/:id" element={<About />} />
                <Route path="/exhibitions/" element={<Exhibitions />} />
                <Route path="/modernexhibit" element={<ModernExhibit />} />
                <Route
                    path="/historicalexhibit"
                    element={<HistoricalExhibit />}
                />
            </Routes>
            </DarkModeProvider>
        </>
    )
}

export default App
