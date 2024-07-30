import React from 'react'
import './Footer.css'

const Footer = () => {

  const year = new Date();

  return (
    <div className="footer">
      <div className="contacts">
        <p><i class="fa-solid fa-paper-plane"></i> bhupalan1711@gmail.com</p>
        <p><i class="fa-solid fa-phone"></i> 6379948255</p>
      </div>
      <div className="icons">
        <a href="https://linkedin.com/in/bhupalan-k-487695247" ><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Bhupalan-K" ><i class="fa-brands fa-github"></i></a>
        <a href="mailto:bhupalan1711@gmail.com" ><i class="fa-regular fa-envelope"></i></a>
        <a href="https://wa.me/7373562627" ><i class="fa-brands fa-whatsapp"></i></a>
      </div>
      <div className='copyright'>
        <p>Copyright &copy; {year.getFullYear()}, All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer