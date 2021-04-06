import React, { useEffect, useState } from 'react'
import './App.css';
import { fetchData, fetchCountries } from './Components/Api.jsx'
import Cards from './Components/Cards.jsx'
import CountryPicker from './Components/CountryPicker.jsx'
import img from './Components/image.png'

const App = () => {

  const [state, setState] = useState({
    data: {},
    country: ""
  })

  const getData = async () => {
    const fetchedData = await fetchData();
    setState({ data: fetchedData })
  }

  useEffect(getData, [])

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setState({ data: fetchedData, country: country })
  }

  return (
    <div className="container">
      <img src={img}></img>
      <Cards data={state.data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
    </div>
  )
}

export default App;
