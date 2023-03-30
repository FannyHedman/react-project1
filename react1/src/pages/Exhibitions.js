// import React from 'react'
// import { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import axios from 'axios'

// const Exhibitions = () => {
//     const [painting, setPainting] = useState([])

//     async function fetchData() {
//         try {
//             const response = await axios.get('data.json')
//             setPainting(response.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//     const names = painting.map((name) => <h2>{name.name}</h2>)
//     const category = painting.map((category) => <p>{category.category}</p>)
//     const image = painting.map((image) => (
//         <img src={image.mediumImage} alt="hejhipp"></img>
//     ))

//     return (
//         <>
//             <ExhibitionsContainer>
//                 <h1>Exhibitions</h1>
//                 <div>
//                     <h2>Historical</h2>
//                     <img className="img" src={image.mediumImage} alt="testbild"></img>
//                 </div>
//                 <div>
//                     <h2>Modern</h2>
//                 </div>
//             </ExhibitionsContainer>
//         </>
//     )
// }

// const ExhibitionsContainer = styled.div`
//     @media (max-width: 420px) {
//         box-sizing: border-box;
//         background-color: black;
//     }
// `
// export default Exhibitions

import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../App.css'

const Exhibitions = () => {
    const [painting, setPainting] = useState([])
    const [filter, setFilter] = useState([])

    async function fetchData() {
        try {
            const response = await axios.get('data.json')
            setPainting(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const filterByCategory = (e) => {
        setPainting(e.target.value)

        const filteredItems = painting.filter((item) =>
            item.year.includes(e.target.value)
        )
        setFilter(filteredItems)
    }


    return (
        <>
            <ExhibitsContainer>
                <ExhibitionsHeader>Exhibitions</ExhibitionsHeader>
                <FilterHeader>Filter by date</FilterHeader>

                {painting
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
                {painting
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
    /* margin: 5%; */
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

    /* align-items: center; */
`

const ExhibitionsHeader = styled.h1`
    /* margin-left: 3vw; */
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
