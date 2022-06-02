import React from 'react'
import './App.css';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Services from './Components/Services';
const App = () => {
  return (
    <div className='App'>      
        <div style={{position:"sticky", top:'3px'}}>
          <Navbar />
        </div>
        <Home/>
        <Services/>
      
    </div>
  )
}

export default App