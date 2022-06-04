import React, {useContext} from 'react'
import ModeContext from '../Context/ModeContext';
import './Work.css'
import { motion } from 'framer-motion'

const Work = (props) => {
    const context = useContext(ModeContext);
  const {mode} = context
    return (
        <div className='p-work' style={{ display: 'flex', flexDirection: 'column', gap: '2rem', border: '7px solid rgba(255, 166, 31, 0.45)', padding: '23px', borderRadius: '23px' }}>
            <div className='w-left' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap:"26px" }}>

                <span style={{ color: mode==='light'? '#242D49':'white', textDecoration:'underline', fontWeight: 'bold', fontSize: "2.5rem" }}> {props.title} </span>


                <motion.img className='w-img' transition={{ ease: 'easeInOut', duration: 0.5 }} whileHover={{ scale: 2.4, y: 15, rotate: 360, }}  src={props.image1} alt="" />
            </div>
            <div className='w-right' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap:'26px' }}>
                
                <motion.img className='w-img' transition={{ ease: 'easeInOut', duration: 0.5 }} whileHover={{ scale: 2.4, rotate: 360, }}  src={props.image2} alt="" />
                <span style={{color: mode==='light'? '#788097':'white', fontSize:"18px", padding:'6px'}}> {props.text} </span>
            </div>
        </div>
        
    )
}

export default Work
