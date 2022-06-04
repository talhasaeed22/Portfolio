import React, { useContext} from 'react'
import ModeContext from '../Context/ModeContext';
import background from '../Images/footer1.png'
import darkbg from '../Images/footerdark.png'
import './Footer.css'
const Footer = () => {
  const context = useContext(ModeContext);
  const {mode} = context
  return (
    <div id='footer' style={{ backgroundImage: `url(${mode === 'dark'? darkbg : background})`, }}>
      <section>
        <div>
          <span id='f-head' style={{ color:'white' ,fontWeight: 'bold',}}>Get connected on social networks:</span>
        </div>
        <div id='icons' style={{ display: 'flex', marginTop: "33px" }}>
          <a rel="noreferrer" target='_blank' href="https://www.facebook.com/talha.saeed.1023" >
            <i  style={{ color: 'white',  }} className="fab fa-facebook-f"></i>
          </a>
          <a rel="noreferrer" target='_blank' href="https://twitter.com/?lang=en" >
            <i  style={{ color: 'white',  }} className="fab fa-twitter"></i>
          </a>
          <a rel="noreferrer" target='_blank' href="https://support.google.com/answer/2451065?hl=en" >
            <i  style={{ color: 'white',  }} className="fab fa-google"></i>
          </a>
          <a rel="noreferrer" target='_blank' href="https://www.instagram.com/talha_saeed2.2/" >
            <i  style={{ color: 'white',  }} className="fab fa-instagram"></i>
          </a>
          <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/login" >
            <i  style={{ color: 'white',  }} className="fab fa-linkedin"></i>
          </a>
          <a rel="noreferrer" target='_blank' href="https://github.com/talhasaeed22" >
            <i  style={{ color: 'white',  }} className="fab fa-github"></i>
          </a>
        </div>


        <div className="container" style={{marginTop:'23px'}}>

            
              <span id='f-contact' style={{fontWeight: 'bold', color:'white', }}>
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