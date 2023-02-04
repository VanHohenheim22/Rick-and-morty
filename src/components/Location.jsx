import React from 'react'

const Location = ({location}) => {
  return (
    <div className='loc-card'>
        <h2>Name: <br/>{location?.name}</h2>
        <ul id='list-one'>
            <li><p><b>Location:</b> <br/> {location?.type}</p></li>
            <li><p><b>Dimension: </b><br/>  {location?.dimension}</p></li>
            <li><p><b>Population: </b><br/> {location?.residents.length}</p></li>
        </ul>
    </div>
  )
}

export default Location




