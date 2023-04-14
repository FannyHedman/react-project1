import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import '../App.css'

const ModernExhibit = () => {
    const [exhibitTwo, setExhibitTwo] = useState([])

    async function fetchData() {
        try {
            const response = await axios.get('data.json')
            setExhibitTwo(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>
                <ExhibitHeader>Modern exhibition</ExhibitHeader>
                <ExhibitOneContainer>
                    {exhibitTwo
                        .filter((item) => item.category === 'Modern')
                        .map((item) => (
                            <div key={item.id}>
                                {item.id === 11 ? (
                                    <div key={item.id}>
                                        <img
                                            src={item.mediumImage}
                                            alt="Girl with hat"
                                        />
                                        <h2>{item.name}</h2>
                                        <p>{item.artist}</p>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                </ExhibitOneContainer>
            </div>
        </>
    )
}

const ExhibitOneContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    margin-top: 5vh;
`

const ExhibitHeader = styled.h1`
    margin-top: 10vh;
    margin-left: 7vw;
`

export default ModernExhibit
