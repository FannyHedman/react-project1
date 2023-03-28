import React from 'react'
import { useMediaQuery } from 'react-responsive'
import HeroImage from '../img/hero-image.jpg'


const HeroImageSection = () => {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1400px' })
    const isMediumScreen = useMediaQuery({
        query: '(min-width: 1101px) and (max-width: 1399px)'
    })
    const isSmallScreen = useMediaQuery({
        query: '(min-width: 901px) and (max-width: 1100px)'
    })
    const isTablet = useMediaQuery({
        query: '(min-width: 421px) and (max-width: 900px)'
    })
    const isMobile = useMediaQuery({ query: '(max-width: 420px)' })
    return (
        <div className="heroSectionContainer">
            {isLargeScreen && (
                <img
                    style={{ width: 1920, height: 900 }}
                    src={HeroImage}
                    alt="logo"
                />
            )}
            {isMediumScreen && (
                <img
                    style={{ width: 1399, height: 700 }}
                    src={HeroImage}
                    alt="logo"
                />
            )}
            {isSmallScreen && (
                <img
                    style={{ width: 1100, height: 600 }}
                    src={HeroImage}
                    alt="logo"
                />
            )}
            {isTablet && (
                <img
                    style={{ width: 900, height: 500 }}
                    src={HeroImage}
                    alt="logo"
                />
            )}
            {isMobile && (
                <img
                    style={{ width: 420, height: 250 }}
                    src={HeroImage}
                    alt="logo"
                />
            )}
            <h1 className="centered">
                TEST
            </h1>
        </div>
    )
}

export default HeroImageSection
