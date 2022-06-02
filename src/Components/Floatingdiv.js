import React from 'react'

const Floatingdiv = (props) => {
  return (
    <div className='floatingDiv' style={{display:'flex', alignItems:'center', justifyContent:"space-around", width:'30%', padding:'12px', boxShadow:'0px 19px 60px rgb(0 0 0 / 8%)', borderRadius:'17px'}}>

        <img style={{width:'50px', height:'50px'}} src={props.image} alt="web" />
        <span style={{fontFamily:"sans-serif",fontSize:"15px"}}>
            {props.text1}
            <br />
            {props.text2}
        </span>
         
    </div>
  )
}

export default Floatingdiv