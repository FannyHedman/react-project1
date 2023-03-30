import React from 'react'
import styled from 'styled-components'

const FilterItems = (props) => {
    const onFilterValueChanged = (e) => {
        props.filterValueSelected(e.target.value)
    }

    return (
        <div>
            <Select name="" onChange={onFilterValueChanged}>
                <option value="all">All</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </Select>
        </div>
    )
}

const Select = styled.select`
    width: 5vw;
    padding: 5%;
    background-color: white;
    color: black;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 4px;
`

export default FilterItems
