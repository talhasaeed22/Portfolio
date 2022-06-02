import React from 'react'
import background from '../Images/footer1.png'
import './Footer.css'
const Footer = () => {
  return (
    <div id='footer' style={{backgroundImage: `url(${background})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover', height:'70vh' }}>
        this is footer
    </div>
  )
}

export default Footer