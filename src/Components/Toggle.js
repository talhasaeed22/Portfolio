import React, { useContext } from 'react'
import './Toogle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import ModeContext from '../Context/ModeContext';

const Toggle = (props) => {
    const context = useContext(ModeContext)
    const {mode} = context
  return (
    <div className='Toggle'>
        <Moon/>
        <Sun/>
        <div className="toggleBTN" style={mode === 'dark' ? {left:'2px'} :{right:'2px'}} onClick={props.switchMode}>

        </div>
    </div>
  )
}

export default Toggle