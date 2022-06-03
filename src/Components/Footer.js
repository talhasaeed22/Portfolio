import React, { useContext} from 'react'
import ModeContext from '../Context/ModeContext';
import background from '../Images/footer1.png'
import darkbg from '../Images/footerdark.png'
import './Footer.css'
const Footer = () => {
  const context = useContext(ModeContext);
  const {mode} = context
  return (
    <div id='footer' style={{ backgroundImage: `url(${mode === 'dark'? darkbg : background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '70vh', margin: '-0.5rem -3.5rem', display: "flex", flexDirection: 'column' }}>
      <section>
        <div className="me-5 d-none d-lg-block">
          <span style={{ color:'white' ,fontWeight: 'bold', fontSize: "1.5rem"}}>Get connected on social networks:</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', marginTop: "33px" }}>
          <a rel="noreferrer" target='_blank' href="https://www.facebook.com/talha.saeed.1023" >
            <i  style={{ color: 'white', fontSize: '1.8rem' }} className="fab fa-facebook-f"></i>
          </a>
          <a rel="noreferrer" target='_blank' href="https://twitter.com/?lang=en" >
            <i  style={{ color: 'white', fontSize: '1.8rem' }} className="fab fa-twitter"></i>
          </a>
          <a rel="noreferrer" target='_blank' href="https://support.google.com/answer/2451065?hl=en" >
            <i  style={{ color: 'white', fontSize: '1.8rem' }} className="fab fa-google"></i>
          </a>
          <a rel="noreferrer" target='_blank' href="https://www.instagram.com/talha_saeed2.2/" >
            <i  style={{ color: 'white', fontSize: '1.8rem' }} className="fab fa-instagram"></i>
          </a>
          <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/login" >
            <i  style={{ color: 'white', fontSize: '1.8rem' }} className="fab fa-linkedin"></i>
          </a>
          <a rel="noreferrer" target='_blank' href="https://github.com/talhasaeed22" >
            <i  style={{ color: 'white', fontSize: '1.8rem' }} className="fab fa-github"></i>
          </a>
        </div>


        <div className="container" style={{marginTop:'23px'}}>

            
              <span style={{fontWeight: 'bold', color:'white', fontSize: "2.5rem"}}>
                Contact
              </span>
              <p style={{color:'white',}}><i style={{color:'white', marginRight:"23px"}} className="fas fa-home me-3"></i>Soan Gardens, Islamabad, PK</p>
              <p style={{color:'white'}}>
                <i style={{color:'white', marginRight:"23px"}} className="fas fa-envelope me-3"></i>
                talhasaeed100@gmail.com
              </p>
              <p style={{color:'white'}}><i style={{color:'white', marginRight:"23px"}} className="fas fa-phone me-3"></i>+923319838411</p>

        
        </div>
      </section>
    </div>
  )
}

export default Footer