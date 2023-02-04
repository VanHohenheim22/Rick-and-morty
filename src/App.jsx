import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import getRandom from './utils/getRandom'
import Location from './components/Location'
import Resident from './components/Resident'



function App() {

  const [location, setLocation] = useState()
  const [rnumber, setRnumber] = useState(getRandom())
  const [hasError, setHasError] = useState(false)
  const [locList, setLoclist] = useState()
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${rnumber}`
    axios.get(url)
    .then(res => {setLocation(res.data), setHasError(false)})
    .catch(err => {console.log(err), setHasError(true)})
  }, [rnumber])

  const handleSubmit = e => {
    e.preventDefault()
    if(e.target.changerannum.value.trim() === ""){
      setRnumber(rnumber)
    } else{setRnumber(e.target.changerannum.value.trim())}
  }

  const handleChange = e => {
    e.preventDefault()
    const url = `https://rickandmortyapi.com/api/location/?name=${e.target.value}`
    axios.get(url)
    .then(res => setLoclist(res.data.results))
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className="head-logo">
        <img src="https://cdn.shopify.com/s/files/1/0346/8063/5529/collections/rick-morty-collection-banner_1400x.jpg?v=1590095280" alt="" />
        <form onSubmit={handleSubmit} className="form-cont">
        <input type="text" id="changerannum" onFocus={() => setShowList(false)} onChange={handleChange} placeholder='Enter the location' className="form"/><button type="submit" className="form" id='buttonform'>Search</button>
        </form>
        
        {showList? "":
        <>
          <ul className='list-location'>
            {  
              locList?.map(loc => (
                <li onClick={() => (
                  setRnumber(loc.id), setShowList(true)
                  )} key={loc.id}>{loc.name}</li>
              ))   
            }
          </ul>
        </>
      }
      </div>

      
      {hasError? <h2>its a number between 1 to 126</h2>:
        <>
          <div className="card-container">
            <Location location={location}/>
            <div className='cont-resident'>
              {
                location?.residents.map(url => (<Resident key={url} url={url}/>))
              }
            </div>
          </div>
        </> 
      }
    </div>
  )
}

export default App