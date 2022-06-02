import React from 'react'

const Card = (props) => {
  return (
    <div style={{padding:'10px', display:'flex', flexDirection:'column', gap:'0.3rem', }}>
        
            <img style={{width:'80px', height:'80px', display:'block', margin:'auto'}} src={props.pic} alt="" />
            <span style={{color:'#242D49', fontSize:"25px", fontWeight:'bold', textAlign:'center', marginTop:'6px'}}> {props.primaryText} </span>
            <span style={{color:'#FCA61F', fontSize:"20px", fontWeight:'bold', textAlign:'center',}}> {props.secondaryText} </span>
            <span style={{textAlign:'center', color:'#788097', fontSize:"14px"}}> {props.tertiaryText} </span>
        
    </div>
  )
}

export default Card