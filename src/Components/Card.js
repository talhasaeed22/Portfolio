import React, {useContext} from 'react'
import ModeContext from '../Context/ModeContext';
const Card = (props) => {
  const context = useContext(ModeContext)
    const {mode} = context
  return (
    <div style={{padding:'10px',  display:'flex', flexDirection:'column', gap:'0.3rem', }}>
        
            <img style={{width:'80px', height:'80px', display:'block', margin:'auto'}} src={props.pic} alt="" />
            <span style={{color: mode==='light'? '#242D49':'white', fontSize:"25px", fontWeight:'bold', textAlign:'center', marginTop:'6px'}}> {props.primaryText} </span>
            <span style={{color:'#FCA61F', fontSize:"20px", fontWeight:'bold', textAlign:'center',}}> {props.secondaryText} </span>
            <span style={{textAlign:'center', color: mode==='light'? '#788097':'white', fontSize:"14px"}}> {props.tertiaryText} </span>
        
    </div>
  )
}

export default Card