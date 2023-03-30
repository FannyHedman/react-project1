import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ModernExhibit = () => {
    const [painting, setPainting] = useState([])

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
                {painting &&
                    painting.map((item) => (
                        <div key={item.id}>
                            <h4
                            // key={item.id[0]}
                            >
                                {item.name}, by {item.artist}
                            </h4>
                            <p
                            // key={item.id[0]}
                            ></p>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default ModernExhibit
