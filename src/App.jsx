import { useState } from 'react'
import './App.css'
import Npsg from './components/NPSG/Npsg'
import Csells from './components/Csells/Csells'
import Mmeta from './components/Mmeta/Mmeta'
import Vpdia from './components/Vpdia/Vpdia'

function App() {
  return (
    <div className="App">
      <div className='mainscreen'>
        <Npsg
        score="75"
        />
        <Csells
        expected='100'
        advanced='60'
        />

        <Mmeta 
          expected='70000'
          advanced='63000'
        />
      </div>
      <div>
        <Vpdia 
        />
      </div>
    </div>
  )
}

export default App
