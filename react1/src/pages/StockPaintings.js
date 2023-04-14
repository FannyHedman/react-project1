import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const StockPaintings = () => {

    const [painting, setPainting] = useState([{}])


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

    return (
        <>
            <div>
                {painting.map((item) => (
                    <div key={item.id}>
                        <Link to={`/paintings/${item.name}`}>{item.name}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default StockPaintings
