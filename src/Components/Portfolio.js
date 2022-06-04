import React, {useContext} from 'react'
import ModeContext from '../Context/ModeContext';
import notebook1 from '../Images/notebook.jpg'
import notebook2 from '../Images/notebook2.JPG'
import follow from '../Images/newmobile.jpg'
import player from '../Images/newplayer.jpg'
import Work from './Work'
import {motion} from 'framer-motion';
import './Portfolio.css'

const Portfolio = () => {
  const context = useContext(ModeContext);
  const {mode} = context
  return (
    <div id='Portfolio' style={{display:'flex', flexDirection:'column', }} >
      <div className="up" style={{flex:1, display:'flex', flexDirection:'column', gap:'1rem', marginBottom:"13px"}}>
        <span style={{ color: mode==='light'? '#242D49':'white', fontWeight: 'bold', fontSize: "2.5rem" }}>Portfolio</span>
        <span style={{ color: '#FCA61F', fontWeight: 'bold', fontSize: "2.5rem" }}>My Work</span>
      </div>
      <div className="bottom" style={{flex:1, display:'flex', position:'relative'}}>

        <motion.div initial={{x:260}} whileInView={{x:0}} transition={{duration:2, ease:'easeInOut', type:'spring', stiffness:120}} id="box1" >
          <Work title="iNotebook" text="This Notebook/Diary was created to make ease for users to save their data online where it can be safe and sound" image1={notebook1} image2={notebook2}/>
        </motion.div>

        <motion.div initial={{x:-260}} whileInView={{x:0}} transition={{duration:2, ease:'easeInOut', type:'spring', stiffness:120}} id="box2" >
          <Work title="Melophile" text="A Music Player made thorugh react native platform. An intellignet Player which can make your efforts lower and works for you using AI/ML Support" image1={follow} image2={player}/>
        </motion.div>

      </div>
    </div>
  )
}

export default Portfolio