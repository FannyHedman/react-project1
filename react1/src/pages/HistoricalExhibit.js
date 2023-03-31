import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../App.css'

const HistoricalExhibit = () => {
    const [exhibitOne, setExhibitOne] = useState([])

    async function fetchData() {
        try {
            const response = await axios.get('data.json')
            setExhibitOne(response.data)
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
                <ExhibitHeader>Historical exhibition</ExhibitHeader>
                <ExhibitOneContainer>
                    {exhibitOne
                        .filter((item) => item.category === 'Historical')
                        .map((item) => (
                            <div key={item.id}>
                                <img
                                    src={item.mediumImage}
                                    alt="historicalImage"
                                />
                                <h2>{item.name}</h2>
                                <p>{item.artist}</p>
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
    margin-top: 5vh;
`

const ExhibitHeader = styled.h1`
    margin-top: 10vh;
    margin-left: 7vw;
`

export default HistoricalExhibit
