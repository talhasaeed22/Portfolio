import React, {useContext} from 'react'
import ModeContext from '../Context/ModeContext';
import './Home.css';
import rightImage from '../Images/photo.png'
import Floatingdiv from './Floatingdiv';
import web from '../Images/webdev.jpg'
import mobile from '../Images/mobile.png'
import glassemoji from '../Images/glass.jpg'
import glassemojidark from '../Images/glassemojidark.jpg'
import {motion} from 'framer-motion'


const Home = () => {
  // const rotate = {
  //   hover:{
      
  //     animate:{
  //       scale:1.5,
  //       rotate:360
  //     },
  //     transition:{
  //       duration:2, 
  //       ease:'easeInOut'
  //     }
  //   }
  // }
  const transition = {durartion:2, type:'spring', stiffness:300};

  const context = useContext(ModeContext);
  const {mode} = context
  return (
    <div className='h-parent'>

      <div className='h-left' style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '2rem' }}>
        <div className="h-name" style={{ display: 'flex', flexDirection: 'column' }}>
          <motion.span initial={{x:'100vh'}} whileInView={{x:0}} animate={{fontSize:'3rem'}} style={{ color: mode==='light'? '#242D49':'white', fontWeight: 'bold', }}>Hii! I Am</motion.span>
          <motion.span initial={{x:'100vh'}} whileInView={{x:0}} animate={{color: '#FCA61F'}}  transition={{type:'spring'}} style={{ fontWeight: 'bold', fontSize: "3rem" }}>M.Talha Saeed</motion.span>
          <p >Frontend Developer </p>
          <span style={{ fontWeight: '100', fontSize: '14px', color: mode==='light'? '#788097':'white', marginBottom: '10px' }}>I Create Stylish Frontend Websites. Also i have put some efforts in Mobile Application Development </span>
        </div>

        <button style={{ marginTop: '15px' }} className="button h-button">
          Hire Me
        </button>
        <div style={{ display: 'flex', gap: '2rem', marginTop:"33px" }}>
          <motion.a transition={{ease:'easeInOut', duration:0.5}} whileHover={{scale:1.5, rotate:360, }} rel="noreferrer" target='_blank' href="https://www.facebook.com/talha.saeed.1023" className=" text-reset">
            <i style={{ color: '#FCA61F', fontSize: '1.8rem' }} className="fab fa-facebook-f"></i>
          </motion.a>
          <motion.a transition={{ease:'easeInOut', duration:0.5}} whileHover={{scale:1.5, rotate:360, }}  rel="noreferrer" target='_blank' href="https://twitter.com/?lang=en" className="me-4 text-reset">
            <i style={{ color: '#FCA61F', fontSize: '1.8rem' }} className="fab fa-twitter"></i>
          </motion.a>
          <motion.a transition={{ease:'easeInOut', duration:0.5}} whileHover={{scale:1.5, rotate:360, }}  rel="noreferrer" target='_blank' href="https://www.instagram.com/talha_saeed2.2/" className=" text-reset">
            <i style={{ color: '#FCA61F', fontSize: '1.8rem' }} className="fab fa-instagram"></i>
          </motion.a>
          <motion.a  transition={{ease:'easeInOut', duration:0.5}} whileHover={{scale:1.5, rotate:360, }} rel="noreferrer" target='_blank' href="https://www.linkedin.com/login" className=" text-reset">
            <i style={{ color: '#FCA61F', fontSize: '1.8rem' }} className="fab fa-linkedin"></i>
          </motion.a>
          <motion.a transition={{ease:'easeInOut', duration:0.5}} whileHover={{scale:1.5, rotate:360, }} rel="noreferrer" target='_blank' href="https://github.com/talhasaeed22" className=" text-reset">
            <i style={{ color: '#FCA61F', fontSize: '1.8rem' }} className="fab fa-github"></i>
          </motion.a>
        </div>
      </div>
      <div className="h-right" style={{ flex: 1, }}>
        <div>
          <motion.img initial={{left:'-36%'}} whileInView={{left:'-24%'}} transition={transition} style={{width:'120px', height:'120px', position:"relative"}} src={mode==='dark'?glassemojidark : glassemoji} alt="" />
        </div>
        <div style={{ position: 'relative', top: '-12%', right: "-20%" }}>
          <img src={rightImage} alt='mine' />
        </div>
        <motion.div initial={{top:'-80%', left:'78%'}}  whileHover={{scale:1.1}} whileInView={{left:'68%'}} transition={transition} style={{ position: 'relative', top: '-79%', right: '-59%'  }}>
          <Floatingdiv image={web} text1='Web' text2='Developer' />
        </motion.div>

        <motion.div initial={{top:'-37%', right:'-16%'}}  whileHover={{scale:1.1}} whileInView={{left:'-2rem'}} transition={transition} style={{ position: 'relative', top: '-27%' }}>
          <Floatingdiv image={mobile} text1='MobileApp' text2='Developer' />
        </motion.div>

        {/* BLUR DIVS */}
        <div className='blur' style={{ backgroundColor: 'rgb(238 210 255)' }}>

        </div>

        <div className='blur' style={{backgroundColor:'#C1F5FF', top:'80%', left:'55%', width:"21rem", height:"11rem"}}>

        </div>

      </div>
    </div>
  )
}

export default Home
