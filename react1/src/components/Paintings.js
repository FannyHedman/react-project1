import React from 'react'
import { useParams } from 'react-router-dom'

const Paintings = () => {
    const { id } = useParams()

    return (
        <div>
            <h2>{id}</h2>
        </div>
    )
}

export default Paintings
