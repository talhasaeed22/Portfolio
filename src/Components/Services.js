import React from 'react'
import Card from './Card'
import './Services.css'
import web from '../Images/webdev.jpg'
import mobile from '../Images/mobile.png'
import CV from '../Components/cv.pdf'

const Services = () => {
  return (
    <div className='s-parent'>
      <div className="s-left" style={{display:'flex', flex:1, flexDirection:'column', gap: '1rem'}}>
        <span style={{ color: '#242D49', fontWeight: 'bold', fontSize: "2.5rem" }}>My Services</span>
        <span style={{ color: '#FCA61F', fontWeight: 'bold', fontSize: "2.5rem" }}>What I Do</span>
        <span style={{ fontWeight: '100', fontSize: '14px', color: '#788097', marginBottom: '10px' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sit iure nam, at quas, sequi tempora porro omnis repellendus molestiae dolorem nulla iusto a quisquam, natus ipsa aut delectus soluta.</span>
        <a href={CV} download><button className="button" style={{width:'8rem', height:'2rem'}}>View CV</button></a>
        <div className="blur" style={{backgrounColor:'#ABF1FF94'}}></div>
      </div>

      <div className="s-right" style={{flex:1, display:'flex', justifyContent:"space-between", flexDirection:"row", gap:'1rem'}}>

        <div style={{border:'7px solid rgba(255, 166, 31, 0.45)',  borderRadius:"20px", marginTop:'38%',height:'33vh', width:'16rem', background:'rgba(255, 255, 255, 0.26)'  }}>
          <Card pic={web} primaryText='Web' secondaryText="Development" tertiaryText="I Development Websites using latest technologies like React." />
          
        </div>
        <div style={{border:'7px solid rgba(255, 166, 31, 0.45)', borderRadius:"20px",  height:'33vh', width:'16rem' }}>
          
          <Card pic={mobile} primaryText='MobileApp' secondaryText="Development" tertiaryText="I have some experience in developing a mobile application using React Native environment." />
        </div>
        <div className='blur' style={{backgroundColor:'#C1F5FF', top:'150%', right:'89%', width:"21rem", height:"11rem"}}>

        </div>
        <div className='blur' style={{backgroundColor:'rgb(255 210 193 / 45%)', top:'150%', left:'55%', width:"21rem", height:"11rem"}}>

        </div>
        
      </div>  
    </div>
  )
}

export default Services