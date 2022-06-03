import React, {useContext} from 'react'
import './App.css';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import ModeContext from './Context/ModeContext';
const App = () => {
  const context = useContext(ModeContext);
  const {mode} = context
  return (
    

    <div className='App'>      
        <div style={{ color: mode==='light'? '#242D49':'white'}}>
          <Navbar />
        </div>
        <Home/>
        <Services/>
        <Portfolio/>
        <Contact/>

        <Footer/>
      
    </div>
   
  )
}

export default App