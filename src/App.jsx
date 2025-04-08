import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.css';
import world_photo from './assets/world.png'




function App() {



  return (
    <>
      <div className="img-section">
        <img src={world_photo} alt="" />
      </div>

      <Main />
    </>
  )
}

export default App
