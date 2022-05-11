import React from 'react'
import CustomList from '../Customlist'
import './style.css'

function User({ item }) {
    return (
        <div>
            <CustomList item={item} />
        </div>
    )
}

export default User