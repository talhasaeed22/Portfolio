import React, {useContext} from 'react'
import ModeContext from '../Context/ModeContext';
import './Floatingdiv.css'
const Floatingdiv = (props) => {
  const context = useContext(ModeContext);
  const {mode} = context
  return (
    <div className='floatingDiv' style={{border:mode==='dark'?'7px solid rgba(255, 166, 31, 0.45)':'none' ,display:'flex', alignItems:'center', justifyContent:"space-around", padding:'12px', boxShadow:'0px 19px 60px rgb(0 0 0 / 8%)', borderRadius:'17px'}}>

        <img style={{width:'50px', height:'50px'}} src={props.image} alt="web" />
        <span style={{color:mode==='dark'?'white':'', fontFamily:"sans-serif",fontSize:"15px"}}>
            {props.text1}
            <br />
            {props.text2}
        </span>
         
    </div>
  )
}

export default Floatingdiv