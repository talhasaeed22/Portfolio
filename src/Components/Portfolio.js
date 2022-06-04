import React, { useContext } from 'react'
import ModeContext from '../Context/ModeContext';
import notebook from '../Images/notebook1.JPG';
import player from '../Images/follow.JPG';
import fb from '../Images/fb.JPG'
import calculator from '../Images/calculator.jpg'
import './Portfolio.css'

const Portfolio = () => {
  const context = useContext(ModeContext);
  const { mode } = context
  return (
    <div id='Portfolio' className='p-portfolio' >

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: "21px", gap: '1rem' }}>
        <span className='p-heading' style={{ color: mode === 'light' ? '#242D49' : 'white', fontWeight: 'bold',  }}>Portfolio</span>
        <span className='p-heading' style={{ color: '#FCA61F', fontWeight: 'bold',  }}>My Work</span>
      </div>

      <div className="top" style={{ gap: '2rem', display: "flex", margin: "5rem 0rem" }}>

        <div className="left" style={{  backgroundImage: "linear-gradient(to right bottom, rgb(49 166 255), rgb(247 227 227))", flex: 1, padding: '23px', height: '50vh', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <div  style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '23px' }}>
            <span className='inside-text' style={{ color: 'white', fontWeight: 'bold',  }}>iNotebook</span>
            <span style={{}} > Full Stack React Application using NodeJS, MongoDB as backend. This Notebook/Diary was created to make ease for users to save their data online where it can be safe and secured </span>
          </div>

          <img className='t-img' src={notebook} style={{ }} alt="" />
        </div>

        <div className="right mobile" style={{  backgroundImage: 'linear-gradient(175deg, #ff7847, #ffac8e)', flex: 1, padding: '23px', display: 'flex', height: '60vh', gap: '2rem' }}>

          <div className='fluid-text' style={{  display: 'flex', flexDirection: 'column', gap: '23px' }}>
            <span className='inside-text' style={{ color: 'white', fontWeight: 'bold',  }}>Melophile</span>
            <span style={{ fontSize: '20px' }}> I Have created this music player in React Native environemt. This stylish music player app is fully functional whose backend is created with firebase and Async Storage </span>
          </div>

          <img className='p-img mobile' src={player} style={{  display: 'block', margin: 'auto', borderRadius: "23px" }} alt="" />

        </div>
      </div>
      <hr />
      <div className="bottom" style={{ gap: '2rem', display: "flex", margin: "5rem 0rem" }}>
        <div className="left mobile" style={{  backgroundImage: 'linear-gradient(330deg, #ffe596, #ffbf00)', flex: 1, padding: '23px', display: 'flex', height: '60vh', gap: '2rem' }}>

          <div className='fluid-text' style={{  display: 'flex', flexDirection: 'column', gap: '23px' }}>
            <span className='inside-text' style={{ color: 'white', fontWeight: 'bold',  }}>Calculator</span>
            <span style={{ fontSize: '20px' }}> I Have created this Calculator App using React Native environment. This Calculator made your calculations easy </span>
          </div>

          <img className='p-img ' src={calculator} style={{  display: 'block', margin: 'auto', borderRadius: "23px" }} alt="" />

        </div>
        <div className="right" style={{  backgroundImage: "linear-gradient(311deg, #766ced, #413ad6)", flex: 1, padding: '23px', height: '50vh', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <div className='fluid-text' style={{  display: 'flex', flexDirection: 'column', gap: '23px' }}>
            <span className='inside-text' style={{ color: 'white', fontWeight: 'bold',  }}>iNotebook</span>
            <span style={{}} > Frontend of a social media app using ReactJS. This is a Clone of Facebook </span>
          </div>

          <img className='t-img' src={fb} style={{ }} alt="" />

        </div>
      </div>


    </div>
  )
}

export default Portfolio