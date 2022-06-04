import React, {useContext} from 'react'
import ModeContext from '../Context/ModeContext';
import Card from './Card'
import './Services.css'
import web from '../Images/webdev.jpg'
import mobile from '../Images/mobile.png'
import CV from '../Components/cv.pdf'
import {motion} from 'framer-motion'


const Services = () => {
  const transition = {durartion:2, type:'spring'};

  const context = useContext(ModeContext);
  const {mode} = context
  return (
    <div className='s-parent ' id='Services'>
      <div className="s-left" style={{display:'flex', flex:1, flexDirection:'column', gap: '1rem'}}>
        <span className='p-heading' style={{ color: mode==='light'? '#242D49':'white', fontWeight: 'bold',  }}>My Services</span>
        <span className='p-heading' style={{ color: '#FCA61F', fontWeight: 'bold',  }}>What I Do</span>
        <span style={{ fontWeight: '100', fontSize: '14px', color: mode==='light'? '#788097':'white', marginBottom: '10px' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sit iure nam, at quas, sequi tempora porro omnis repellendus molestiae dolorem nulla iusto a quisquam, natus ipsa aut delectus soluta.</span>
        <a href={CV} download><motion.button whileHover={{scale:1.5}} transition={{type:'spring', stiffness:'500'}} className="button" style={{width:'8rem', height:'2rem'}}>View CV</motion.button></a>
        <div className="blur" style={{backgrounColor:'#ABF1FF94'}}></div>
      </div>

      <div className="s-right" style={{flex:1,   gap:'1rem'}}>

        <motion.div className='motion-div' initial={{right:'-36%'}} whileInView={{left:'0%'}} transition={transition} style={{border:'7px solid rgba(255, 166, 31, 0.45)',  borderRadius:"20px", marginTop:'38%',height:'33vh', position:"relative", background:'rgba(255, 255, 255, 0.26)'  }}>
          <Card pic={web} primaryText='Web' secondaryText="Development" tertiaryText="I Development Websites using latest technologies like React." />
          
        </motion.div>
        <motion.div className='motion-div' initial={{left:'-36%'}} whileInView={{left:'0%'}} transition={transition} style={{border:'7px solid rgba(255, 166, 31, 0.45)', borderRadius:"20px", position:"relative",  height:'33vh', background:'rgba(255, 255, 255, 0.26)' }}>
          
          <Card pic={mobile} primaryText='MobileApp' secondaryText="Development" tertiaryText="I have some experience in developing a mobile application using React Native environment." />
        </motion.div>

        
      </div>  
    </div>
  )
}

export default Services