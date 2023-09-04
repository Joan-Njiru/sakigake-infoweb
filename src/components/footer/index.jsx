import React from 'react';
import './style.css';
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <div className="footer">
          <div className='logos'>
           <svg className='logs'  width="140" height="253" viewBox="0 0 440 253" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="275" cy="48" r="23" fill="#FFFFFF"/>
         <circle cx="275" cy="48" r="23" fill="#FFFFFF"/>
        <circle cx="164" cy="48" r="23" fill="#FFFFFF"/>
       <circle cx="164" cy="48" r="23" fill="#FFFFFF"/>
      <path d="M179.154 91H145V228H179.154V166.024C214.284 195.381 246.919 178.256 258.846 166.024V228H293V91H258.846C258.575 110.028 252.341 144.821 219 144.821C187.665 144.821 179.425 107.853 179.154 91Z" fill="#FFFFFF"/>
     <path d="M179.154 91H145V228H179.154V166.024C214.284 195.381 246.919 178.256 258.846 166.024V228H293V91H258.846C258.575 110.028 252.341 144.821 219 144.821C187.665 144.821 179.425 107.853 179.154 91Z" fill="#FFFFFF"/>
    </svg>
    <h1>MzaziConnect</h1>
          </div>
          <p className='navigate'>Navigating CBC Success Together</p>
        </div>
        <div className="information">
          <span>VISIT US</span>
          <ul>
            <li>616 Korongo Road</li>
            <li>Off Ndege Road, Karen</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
        <div className="CONTACT US">
          <span>CONTACT US</span>
          <ul>
            <li>mzaziconnect@gmail.com</li>
            <li>0111 365595</li>
            <div className='iconz'>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i class="bi bi-linkedin"></i>
            </div>
          </ul>
        </div>
      </div>
      <hr className="footer-hr" />
      <p className="footer-last-line">
      &copy; 2023 MzaziConnect
      </p>
    </div>
  );
}
export default Footer;