import React from 'react'

function CustomList({ item }) {
  return (
    <div>
      <ul className='fragmentList'>
        {
          item.map((text, index) => (
            <li key={index}>
              <p>{text.text}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CustomList