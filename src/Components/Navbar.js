import React, { useContext, useState } from 'react'
import ModeContext from '../Context/ModeContext';
import {Link} from 'react-scroll'

import './Navbar.css'
import Toggle from './Toggle';
const Navbar = () => {

    window.addEventListener('scroll', ()=>{
        var header = document.querySelector('.n-parent');
        header.classList.toggle("sticky", window.scrollY > 0);
    })


    const context = useContext(ModeContext)
    const {switchMode, mode} = context

    const [toggleMenuBar, setToggleMenuBar] = useState('none');

    const toggleHamburger = () => {
        const Hamburger = document.querySelector('.Hamburger')
        const navMenu = document.querySelector('.n-list');
        const toggleMenu = document.getElementById('toggleMenu');


        Hamburger.classList.toggle('active')
        navMenu.classList.toggle('active')
        if (toggleMenuBar === 'none') {
            toggleMenu.style.display = 'block'
            toggleMenu.style.height = '15vh'
            setToggleMenuBar('block')
        } else {
            toggleMenu.style.display = 'none'
            toggleMenu.style.height = '10vh'
            setToggleMenuBar('none')
        }

    }
    return (
        <div id='Navbar'>
            <div className='n-parent'  style={{ borderBottom: '1px solid #FCA61F', position:"fixed", top:'0px', width:'90%', zIndex:'1000000', backgroundColor:mode === 'dark' ? 'black': 'white'}}>
                <div className="n-left">
                    <div className="name" style={{ fontSize: '1.6rem', fontWeight: 'bolder' }}>
                        TalhaS
                    </div>
                    <div className="toggle">
                        <Toggle switchMode={switchMode} mode={mode}/>
                    </div>
                </div>
                <div className="n-right">
                    <div className="n-list">
                        <ul>
                            <Link spy={true} to="Navbar" smooth={true} >
                                <li>Home</li>
                            </Link>
                            <Link spy={true} to='Services' smooth={true} >
                                <li>Services</li>                            
                            </Link>
                            <Link spy={true} to="Portfolio" smooth={true} >
                                 <li>Portfolio</li>
                            </Link>
                            <Link spy={true} to="ContactMe" smooth={true} >
                                <li>ContactMe</li>
                            </Link>
                            
                            
                            
                        </ul>
                    </div>
                    <div className='Hamburger'>
                        <span onClick={toggleHamburger} className="bar"></span>
                        <span onClick={toggleHamburger} className="bar"></span>
                        <span onClick={toggleHamburger} className="bar"></span>
                    </div>
                </div>
            </div>
            <div id='toggleMenu'>

            </div>
        </div>
    )
}

export default Navbar