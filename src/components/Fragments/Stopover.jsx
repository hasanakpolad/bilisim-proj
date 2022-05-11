import React from 'react'
import CustomList from '../Customlist'
import './style.css'

function Stopover({ item }) {
    return (
        <div>
            <CustomList item={item} />
        </div>
    )
}

export default Stopover