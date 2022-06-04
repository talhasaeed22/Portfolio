import React, { useContext } from 'react'
import ModeContext from '../Context/ModeContext';
import notebook1 from '../Images/notebook1.JPG'
import notebook2 from '../Images/notebook22.JPG'
import follow from '../Images/newmobile.jpg'
import player from '../Images/newplayer.jpg'
import { motion } from 'framer-motion';
import './Portfolio.css'
const NewPortfolio = () => {
    const context = useContext(ModeContext);
    const { mode } = context
    return (
        <div id='Portfolio' style={{ display: 'flex', flexDirection: 'column', }} >
            <div className="up" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: "13px" }}>
                <span style={{ color: mode === 'light' ? '#242D49' : 'white', fontWeight: 'bold', fontSize: "2.5rem" }}>Portfolio</span>
                <span style={{ color: '#FCA61F', fontWeight: 'bold', fontSize: "2.5rem" }}>My Work</span>
            </div>
            <div className="bottom" >

                <div id='p-first' >

                    <motion.div initial={{x:-260}} whileInView={{x:0}} transition={{duration:2, ease:'easeInOut', type:'spring', stiffness:120}} className="row">
                        <span style={{ textDecoration:'underline', color: mode === 'light' ? '#242D49' : 'white', fontWeight: 'bold', fontSize: "2.5rem" }}>iNotebook</span>
                        <img style={{borderRadius:'24px'}} className='p-img' src={notebook1} alt="" />
                    </motion.div>
                    <motion.div initial={{x:260}} whileInView={{x:0}} transition={{duration:2, ease:'easeInOut', type:'spring', stiffness:120}} className="row">
                        <img style={{borderRadius:'24px'}} className='p-img' src={notebook2} alt="" />
                        <span id='fluid-span' style={{ color: mode === 'light' ? '#788097' : 'white',   }}> This Notebook/Diary was created to make ease for users to save their data online where it can be safe and sound </span>
                    </motion.div>

                </div>

                <div id='p-second'>

                    <motion.div initial={{x:-260}} whileInView={{x:0}} transition={{duration:2, ease:'easeInOut', type:'spring', stiffness:120}} className="row">
                        <span style={{ textDecoration:'underline', color: mode === 'light' ? '#242D49' : 'white', fontWeight: 'bold', fontSize: "2.5rem" }}>Melophile</span>
                        <img style={{borderRadius:'24px'}} className='p-img' src={player} alt="" />
                    </motion.div>
                    <motion.div initial={{x:260}} whileInView={{x:0}} transition={{duration:2, ease:'easeInOut', type:'spring', stiffness:120}} className="row">
                        <img style={{borderRadius:'24px'}} className='p-img' src={follow} alt="" />
                        <span id='fluid-span' style={{ color: mode === 'light' ? '#788097' : 'white',   }}> I Have created this music player in React Native environemt. This stylish music player app is fully functional whose backend is created with firebase and Async Storage </span>
                    </motion.div>

                </div>
            </div>

        </div>
    )
}

export default NewPortfolio