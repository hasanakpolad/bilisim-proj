import React from 'react'
import CustomList from '../Customlist'

function Ticket({ item }) {
 return (
  <div>
   <CustomList item={item} />
  </div>
 )
}

export default Ticket