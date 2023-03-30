import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../App.css'
import FilterItems from '../components/FilterItems'

const Exhibitions = () => {
    const [exhibit, setExhibit] = useState([])
    const [filterValue, setFilterValue] = useState('All')

    const filteredItem = exhibit.filter((item) => {
        if (filterValue === '2022') {
            return item.year === '2022'
        } else if (filterValue === '2023') {
            return item.year === '2023'
        } else {
            return item
        }
    })

    async function fetchData() {
        try {
            const response = await axios.get('data.json')
            setExhibit(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // const filterByCategory = (e) => {
    //     setExhibit(e.target.value)

    //     const filteredItems = exhibit.filter((item) =>
    //         item.year.includes(e.target.value)
    //     )
    //     setFilter(filteredItems)
    // }

    const onFilterValueSelected = (filterValue) => {
        setFilterValue(filterValue)
    }

    return (
        <>
            <ExhibitsContainer>
                <ExhibitionsHeader>Exhibitions</ExhibitionsHeader>
                <FilterHeader>Filter by date</FilterHeader>
                <FilterSelect>
                    <FilterItems filterValueSelected={onFilterValueSelected} />
                </FilterSelect>

                {filteredItem
                    .filter((item) => item.id === 6)
                    .map((filteredItem) => (
                        <ExhibitOneContainer key={filteredItem}>
                            <Link to="/historicalexhibit">
                                <Img
                                    className="imageStyle"
                                    src={filteredItem.mediumImage}
                                    alt="Woman with collar"
                                />
                                <ExhibitOneHeader>Historical</ExhibitOneHeader>
                            </Link>
                        </ExhibitOneContainer>
                    ))}
                {filteredItem
                    .filter((item) => item.id === 11)
                    .map((filteredItem) => (
                        <ExhibitTwoContainer key={filteredItem}>
                            <Link to="/modernexhibit">
                                <Img
                                    src={filteredItem.mediumImage}
                                    alt="Couples swimming"
                                />
                                <ExhibitOneHeader>Modern</ExhibitOneHeader>
                            </Link>
                        </ExhibitTwoContainer>
                    ))}
            </ExhibitsContainer>
        </>
    )
}

const ExhibitsContainer = styled.div`
    display: grid;
    box-sizing: border-box;
    width: 100%;
    margin-top: 5vh;
    gap: 20px;
    justify-items: left;
    justify-content: center;
    @media (max-width: 920px) {
        justify-items: center;
        grid-template-columns: 1fr;
        grid-template-rows: 0.5fr, 1fr, 1fr;
    }

    @media (min-width: 921px) {
        grid-template-columns: 0.5fr, 1fr, 1fr;
        grid-template-rows: 0.5fr, 1fr;
    }
`

const ExhibitionsHeader = styled.h1`
    @media (max-width: 920px) {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 1;
        font-size: 1.5rem;
    }
    @media (min-width: 921px) {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 1;
    }
`

const FilterHeader = styled.h5`
    @media (min-width: 921px) {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 2;
        grid-row-end: 2;
        margin-right: 5vw;
    }
`

const FilterSelect = styled.div`
    @media (min-width: 921px) {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 2;
        grid-row-end: 2;
        margin-right: 5vw;
        margin-top: 7vh;
    }
`

const ExhibitOneContainer = styled.div`
    @media (max-width: 920px) {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 2;
        grid-row-end: 2;
    }
    @media (min-width: 921px) {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 2;
    }
    position: relative;
    text-align: center;
`
const ExhibitTwoContainer = styled.div`
    @media (max-width: 920px) {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 3;
        grid-row-end: 3;
    }

    @media (min-width: 921px) {
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 2;
    }
    position: relative;
    text-align: center;
`
const ExhibitOneHeader = styled.h2`
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`

const Img = styled.img`
    @media (max-width: 420px) {
        width: 420px;
    }

    @media (min-width: 421px) and (max-width: 920px) {
        width: 900px;
        max-width: 100%;
    }

    @media (min-width: 921px) and (max-width: 1100px) {
        width: 400px;
    }

    @media (min-width: 1101px) and (max-width: 2000px) {
        width: 500px;
    }
`

export default Exhibitions
