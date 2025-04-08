import React from 'react'
import './Main.css'
import LeftBox from './LeftBox'

const Main = () => {

    const header = {
        'X-Api-Key':import.meta.env.VITE_API_KEY
    }

    

  return (
    <>
      <LeftBox/>
    </>
  )
}

export default Main
