import React, {useRef, useState, useContext} from 'react'
import ModeContext from '../Context/ModeContext';
import './Contact.css'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'
const Contact = () => {
  const context = useContext(ModeContext);
  const {mode} = context
  const [send, setSend] = useState('')
  const [data, setData] = useState({user_name:'', user_email:'', message: '' })

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
}

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(data.user_name === '' || data.user_email === '' || data.message === ''){
      setSend('Please Fill All The Fields');
      setTimeout(() => {
        setSend('');
      }, 3000);
    }else{
      emailjs.sendForm('service_a50aov3', 'template_v9v19i7', form.current, 'DE0o5JsshXGSpc7UB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setSend('Thanks For Contacting Me!');
        setData({user_name:'', user_email:'', message: '' })
        setTimeout(() => {
          setSend('');
        }, 3000);
        // document.querySelectorAll('.inp').values = '';
    }

    }


  return (
    <div id='ContactMe' className='c-parent' style={{ display:'flex', marginTop:'4rem'}}>
      <div className="c-left" style={{display:'flex', flex:1, flexDirection:'column', gap: '1rem'}}>
        <span className='p-heading' style={{ color: mode==='light'? '#242D49':'white', fontWeight: 'bold',  }}>Get in Touch</span>
        <span className='p-heading' style={{ color: '#FCA61F', fontWeight: 'bold',  }}>Contact Me</span>
        <div id='icon-gap' style={{ display: 'flex', marginTop:"33px" }}>
          <motion.a id='c-icons' transition={{ease:'easeInOut', duration:0.5}} whileHover={{scale:1.5, rotate:360, }} rel="noreferrer" target='_blank' href="https://www.facebook.com/talha.saeed.1023" className=" text-reset">
            <i style={{ color: '#FCA61F',}} className="fab fa-facebook-f"></i>
          </motion.a>
          <motion.a id='c-icons' transition={{ease:'easeInOut', duration:0.5}} whileHover={{scale:1.5, rotate:360, }}  rel="noreferrer" target='_blank' href="https://twitter.com/?lang=en" className="me-4 text-reset">
            <i style={{ color: '#FCA61F',}} className="fab fa-twitter"></i>
          </motion.a>
          <motion.a id='c-icons' transition={{ease:'easeInOut', duration:0.5}} whileHover={{scale:1.5, rotate:360, }}  rel="noreferrer" target='_blank' href="https://www.instagram.com/talha_saeed2.2/" className=" text-reset">
            <i style={{ color: '#FCA61F',}} className="fab fa-instagram"></i>
          </motion.a>
          <motion.a id='c-icons'  transition={{ease:'easeInOut', duration:0.5}} whileHover={{scale:1.5, rotate:360, }} rel="noreferrer" target='_blank' href="https://www.linkedin.com/login" className=" text-reset">
            <i style={{ color: '#FCA61F',}} className="fab fa-linkedin"></i>
          </motion.a>
          <motion.a id='c-icons' transition={{ease:'easeInOut', duration:0.5}} whileHover={{scale:1.5, rotate:360, }} rel="noreferrer" target='_blank' href="https://github.com/talhasaeed22" className=" text-reset">
            <i style={{ color: '#FCA61F',}} className="fab fa-github"></i>
          </motion.a>
        </div>
      </div>

      <div className="c-right" style={{display:'flex', flex:1, justifyContent:'center'}}>
        <form ref={form} onSubmit={sendEmail} className="form" style={{display:'flex', flexDirection:'column', gap:'2rem', alignItems:"center"}}>
          <input value={data.user_name} onChange={onChange} style={mode === 'light'? {border:'2px solid #FCA61F', borderRadius: '8px'}: {border:"none", color:'white', borderBottom:'2px solid #FCA61F', background:'transparent'}} className='inp' type="text" name="user_name" id="name" 
          placeholder='Name' />
          <input value={data.user_email} onChange={onChange} style={mode === 'light'? {border:'2px solid #FCA61F', borderRadius: '8px'}: {border:"none", color:'white', borderBottom:'2px solid #FCA61F', background:'transparent'}} className='inp' type="email" name="user_email" id="email" placeholder='Email' />
          <textarea onChange={onChange} value={data.message} style={mode === 'light'? {border:'2px solid #FCA61F', borderRadius: '8px'}: {border:"none", color:'white', borderBottom:'2px solid #FCA61F', background:'transparent'}} className='inp' type="text" name="message" id="name" placeholder='Message' />
          <input  type="submit" value='Send' className='button' />
          <span style={{color:'#FCA61F'}}>{send}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact