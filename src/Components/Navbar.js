import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='n-parent' style={{borderBottom:'1px solid #FCA61F'}}>
        <div className="n-left">
            <div className="name" style={{fontSize:'1.6rem', fontWeight:'bolder'}}>
                Talha.
            </div>
            <div className="toggle">
                Toggle 
            </div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>ContactMe</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar