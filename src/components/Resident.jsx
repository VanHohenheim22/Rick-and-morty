import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import color from '../json/colorstatus.json'

const Resident = ({url}) => {
    const [resident, setResident] = useState()

    useEffect(() => {
      axios.get(url)
      .then(res => setResident(res.data))
      .catch(err => console.log(err))
    }, [])
    

    const colorSelector = (obj) => {
      let key = ""
      let status = Object.keys(obj);
      status.forEach(element => {
        if(element === (resident?.status)){
          key = obj[element]
        }
      })
      return key;
    }
  return (
    <div className='card-resident'>
      <div className="status-char">
        <div className="circle-status" style={{backgroundColor: colorSelector(color)}}></div>
        <div><span>{resident?.status}</span></div>
        
      </div>
      <div className="headCharcard">
        <img src={resident?.image} alt="" />
        <h2>{resident?.name}</h2>
        <hr />
      </div>
      <div className="info-charcard">
        <ul>
          <li>Raza: <br/> <b className='bold-char'>{resident?.species}</b></li>
          <li>Origen: <br/> <b className='bold-char'>{resident?.origin.name}</b></li>
          <li>Apariciones en episodios:<br/><b className='bold-char'>{resident?.episode.length}</b> </li>
        </ul>
      </div>
    </div>
  )
}

export default Resident