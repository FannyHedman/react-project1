import React from 'react'
import HeroImage from '../components/HeroImage'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <HeroImage />
            <Link to="/about/1">Länk 1</Link>
            <Link to="/about/2">Länk 2</Link>
        </>
    )
}

export default Home
