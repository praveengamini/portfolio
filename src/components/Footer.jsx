import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className='flex justify-center gap-11 mb-24 max-md:mb-7 mt-4'>
        <a href="https://github.com/praveengamini" target='_blank' ><FaGithub  className=' size-10 hover:scale-125 transition-transform duration-300'/></a>
        <a href="https://www.linkedin.com/in/praveen-gamini-3bb729273?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BnYohxNHoTtS%2BkIDsFIOXTw%3D%3D" target='_blank'> <FaLinkedin className='size-10 text-blue-800 hover:scale-125 transition-transform duration-300' /> </a>
        <a href="https://www.instagram.com/praveengamini/" target='_blank'><FaInstagram className=' text-pink-800 size-10 hover:scale-125 transition-transform duration-300' /></a>
        <a href="https://mail.google.com/mail/?view=cm&to=praveengamini009@gmail.com" target='_blank'><CiMail className='text-orange-500 size-10 hover:scale-125 transition-transform duration-300'/> </a>
    </footer>
  )
}

export default Footer
