import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Footer() {
  return (
    <div style={{ width: '100%', height: '300px' }} className='d-flex justify-content-center align-items-center flex-column '>
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'> 
        <div style={{width:'300px'}} className="website">
          <h4><img src="./gcart.png" alt="logo"
        style={{ 
        width: '40px',  
        height: 'auto', 
        marginRight: '20px' }} ></img>Gcart</h4>
          <h6>Gcart is a modern e-commerce platform built with React as part of a full-stack learning journey.</h6>
          <h6>This project demonstrates product listing, cart functionality, and secure checkout processes.</h6>
          <p>Version: 1.0.0</p>
        </div>
        
        <div className="links d-flex flex-column">
          <h4>Quick Links</h4>
         
          <Link to={'/Home'} style={{textDecoration:'none'}}>Home</Link>
          <Link to={'/cart'} style={{textDecoration:'none'}}>My Cart</Link>
          <Link to={'/Wishlist'} style={{textDecoration:'none'}}>Wishlist</Link>
        </div>
        
        <div className="guids d-flex flex-column">
          <h4>Resources</h4>
          <Link to={'https://reactjs.org/'} style={{textDecoration:'none'}}>React Documentation</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}>React Bootstrap</Link>
          <Link to={'https://redux.js.org/'} style={{textDecoration:'none'}}>Redux</Link>
        </div>

        <div className="contact">
          <h4>Newsletter</h4>
          <div className="d-flex">
            <input type="email" placeholder='Enter your email' className="form-control" />
            <Button variant="dark" className="text-secondary"><i className="fa-solid fa-arrow-right"></i></Button>
          </div>
          
          <div className="d-flex flex-row mt-3 justify-content-between">
            <Link to='https://www.instagram.com/' style={{textDecoration: 'none'}}>
              <i className="fa-brands fa-instagram me-3" style={{fontSize:'24px'}}></i>
            </Link>
            <Link to='https://www.linkedin.com/' style={{textDecoration: 'none'}}>
              <i className="fa-brands fa-linkedin me-3" style={{fontSize:'24px'}}></i>
            </Link>
            <Link to='https://facebook.com/' style={{textDecoration: 'none'}}>
              <i className="fa-brands fa-facebook me-3" style={{fontSize:'24px'}}></i>
            </Link>
            <Link to='https://twitter.com/' style={{textDecoration: 'none'}}>
              <i className="fa-brands fa-twitter me-3" style={{fontSize:'24px'}}></i>
            </Link> 
          </div>
        </div>
      </div>  
      
      <p className="mt-4 text-center">
        Copyright &copy; 2025 Gcart, Built with React
      </p>
    </div>
  )
}

export default Footer;