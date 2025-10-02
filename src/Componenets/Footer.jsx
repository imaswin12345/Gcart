import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Footer() {
  return (
    <div 
      style={{ 
        width: '100%', 
        minHeight: '400px',
       background: "#0A1128", 
        borderTop: '1px solid #3a3a5e',
        paddingTop: '60px',
        paddingBottom: '30px'
      }} 
      className='d-flex justify-content-center align-items-center flex-column'
    >
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap px-4' style={{ maxWidth: '1400px' }}> 
        
        {/* Brand Section */}
        <div style={{ width: '300px', marginBottom: '30px' }} className="website">
          <div className="d-flex align-items-center mb-3">
            <div 
              className="d-flex align-items-center justify-content-center me-2 rounded-3"
              style={{
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '8px',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
              }}
            >
              <img 
                src="./gcart.png" 
                alt="G-CART Logo"
                style={{ width: '100%', height: 'auto', filter: 'brightness(1.2)' }}
              />
            </div>
            <h4 
              className="mb-0 fw-bold"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '24px'
              }}
            >
              G-CART
            </h4>
          </div>
          <p style={{ color: '#a0a0c0', fontSize: '14px', lineHeight: '1.6' }}>
            Gcart is a modern e-commerce platform built with React as part of a full-stack learning journey.
          </p>
          <p style={{ color: '#a0a0c0', fontSize: '14px', lineHeight: '1.6' }}>
            This project demonstrates product listing, cart functionality, and secure checkout processes.
          </p>
          <p style={{ color: '#667eea', fontSize: '12px', fontWeight: '600' }}>Version: 1.0.0</p>
        </div>
        
        {/* Quick Links */}
        <div className="links d-flex flex-column" style={{ marginBottom: '30px' }}>
          <h5 className="mb-3 fw-bold" style={{ color: '#e0e0ff' }}>Quick Links</h5>
          <Link 
            to={'/'} 
            className="mb-2"
            style={{
              textDecoration: 'none',
              color: '#a0a0c0',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#667eea';
              e.currentTarget.style.paddingLeft = '5px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a0c0';
              e.currentTarget.style.paddingLeft = '0';
            }}
          >
            Home
          </Link>
          <Link 
            to={'/cart'} 
            className="mb-2"
            style={{
              textDecoration: 'none',
              color: '#a0a0c0',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#667eea';
              e.currentTarget.style.paddingLeft = '5px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a0c0';
              e.currentTarget.style.paddingLeft = '0';
            }}
          >
            My Cart
          </Link>
          <Link 
            to={'/wishlist'} 
            className="mb-2"
            style={{
              textDecoration: 'none',
              color: '#a0a0c0',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#667eea';
              e.currentTarget.style.paddingLeft = '5px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a0c0';
              e.currentTarget.style.paddingLeft = '0';
            }}
          >
            Wishlist
          </Link>
        </div>
        
        {/* Resources */}
        <div className="guids d-flex flex-column" style={{ marginBottom: '30px' }}>
          <h5 className="mb-3 fw-bold" style={{ color: '#e0e0ff' }}>Resources</h5>
          <a 
            href="https://reactjs.org/" 
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2"
            style={{
              textDecoration: 'none',
              color: '#a0a0c0',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#667eea';
              e.currentTarget.style.paddingLeft = '5px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a0c0';
              e.currentTarget.style.paddingLeft = '0';
            }}
          >
            React Documentation
          </a>
          <a 
            href="https://react-bootstrap.netlify.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2"
            style={{
              textDecoration: 'none',
              color: '#a0a0c0',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#667eea';
              e.currentTarget.style.paddingLeft = '5px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a0c0';
              e.currentTarget.style.paddingLeft = '0';
            }}
          >
            React Bootstrap
          </a>
          <a 
            href="https://redux.js.org/" 
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2"
            style={{
              textDecoration: 'none',
              color: '#a0a0c0',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#667eea';
              e.currentTarget.style.paddingLeft = '5px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a0c0';
              e.currentTarget.style.paddingLeft = '0';
            }}
          >
            Redux
          </a>
        </div>

        {/* Newsletter & Social */}
        <div className="contact" style={{ marginBottom: '30px', minWidth: '280px' }}>
          <h5 className="mb-3 fw-bold" style={{ color: '#e0e0ff' }}>Newsletter</h5>
          <div className="d-flex mb-3">
            <input 
              type="email" 
              placeholder='Enter your email' 
              className="form-control rounded-start"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid #3a3a5e',
                color: '#e0e0ff',
                padding: '10px 15px'
              }}
            />
            <Button 
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                padding: '10px 20px',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </div>
          
          <div className="d-flex flex-row mt-4 justify-content-start gap-3">
            <a 
              href='https://www.instagram.com/' 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#a0a0c0',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#667eea';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a0a0c0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a 
              href='https://www.linkedin.com/' 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#a0a0c0',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#667eea';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a0a0c0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a 
              href='https://facebook.com/' 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#a0a0c0',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#667eea';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a0a0c0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a 
              href='https://twitter.com/' 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#a0a0c0',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#667eea';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a0a0c0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fa-brands fa-twitter"></i>
            </a> 
          </div>
        </div>
      </div>  
      
      {/* Copyright */}
      <div 
        className="mt-5 pt-4 text-center w-100"
        style={{
          borderTop: '1px solid #3a3a5e',
          color: '#a0a0c0',
          fontSize: '14px'
        }}
      >
        <p className="mb-0">
          Copyright &copy; 2025 G-CART. Built with ❤️ using React
        </p>
      </div>
    </div>
  )
}

export default Footer;