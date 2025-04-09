import React, { useEffect, useState } from 'react'
import './Main.css'
import LeftBox from './LeftBox'
import RightBox from './RightBox';
import loading from '../assets/loading.gif'

function LoadingScreen() {
  return <div className="d-flex justify-content-center align-items-center vh-100">
      <div className='loadingScreen'>
          <img src={loading} alt="" />
          <h2>Finding the country..</h2>
      </div>
  </div>
}

const Main = () => {

  const [population, setPopulation] = useState([]);
  const [flagLink, setFlagLink] = useState('')
  const [weekdays, setWeekDays] = useState([])
  const [countryData, setCountryData] = useState([])
  const [loading,setLoading] = useState(false)

  const getAPIData = (url) => {
    const headers = {
      'X-Api-Key': import.meta.env.VITE_API_KEY
    }
    return fetch(url, { headers }).then((res) => res.json());
  }


  const populationData = async (country) => {

    try {

      const countryIso = await getAPIData(`https://api.api-ninjas.com/v1/country?name=${country}`);
      const year = new Date().getFullYear();
      const [response, link, weekdaysArr, countryInfo] = await Promise.all([
        getAPIData(`https://api.api-ninjas.com/v1/population?country=${country}`),
        getAPIData(`https://api.api-ninjas.com/v1/countryflag?country=${countryIso[0].iso2}`),
        getAPIData(`https://api.api-ninjas.com/v1/workingdays?country=${countryIso[0].iso2}&year=${year}`),
        getAPIData(`https://api.api-ninjas.com/v1/country?name=${country}`)

      ])

      const data = response.historical_population.filter((data) => data.year > 2009)
      setPopulation(data);
      setFlagLink(link.rectangle_image_url);
      setWeekDays(weekdaysArr.working_days);
      setCountryData(countryInfo[0])

    } catch (err) {
      alert(err.message);
    }



    // console.log(link)
    // console.log(population)
  }

  // useEffect(() => {
  //   populationData('Malaysia')
  // }, [])

  function searchCountry(country) {
    if(country){
      setLoading(true);
      setPopulation([])
      populationData(country)
    }else{
      alert('Please enter country')
    }
   
  }

  // useEffect(() => {
  //   console.log('Updated')
  //   console.log(countryData)
  // }, [countryData])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className='col-md-8'>
            {population.length > 0 ? <LeftBox population={population} flagLink={flagLink} weekdays={weekdays} countryData={countryData} /> : loading && <LoadingScreen/>}

          </div>
          <div className="col-md-4">
            <RightBox searchCountry={searchCountry} />
          </div>
        </div>
      </div>


    </>
  )
}

export default Main
