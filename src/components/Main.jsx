import React, { useEffect, useState } from 'react'
import './Main.css'
import LeftBox from './LeftBox'

const Main = () => {

  const [population, setPopulation] = useState([]);
  const [flagLink, setFlagLink] = useState('')

  const getAPIData = (url) => {
    const headers = {
      'X-Api-Key': import.meta.env.VITE_API_KEY
    }
    return fetch(url, { headers }).then((res) => res.json());
  }


  const populationData = async (country) => {
    const countryIso = await getAPIData(`https://api.api-ninjas.com/v1/country?name=${country}`);
    const [response, link] = await Promise.all([
      getAPIData(`https://api.api-ninjas.com/v1/population?country=${country}`),
      getAPIData(`https://api.api-ninjas.com/v1/countryflag?country=${countryIso[0].iso2}`)
    ])

    const data = response.historical_population.filter((data) => data.year > 2009)
    setPopulation(data);
    setFlagLink(link.rectangle_image_url);
    // console.log(link)
    // console.log(population)
  }

  useEffect(() => {
    populationData('thailand')
  }, [])

  // useEffect(() => {
  //   console.log('Updated')
  //   console.log(flagLink)
  // }, [flagLink])

  return (
    <>
      {population.length > 0 ? <LeftBox population={population} flagLink={flagLink} /> : <h2 className='text-center text-white'>Loading...</h2>}
    </>
  )
}

export default Main
