import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const wishlist = useSelector((state) => state.wishlistReducer)
  const cart = useSelector((state) => state.cartReducer)
  
  return (
    <Navbar 
      expand="lg" 
      className="sticky-top shadow-lg" 
      style={{
     
        background: "#0A1128", 
        borderBottom: '1px solid #282846' 
      }}
    >
      <Container>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Navbar.Brand className="d-flex align-items-center">
            <div 
              className="d-flex align-items-center justify-content-center me-2 rounded-3"
              style={{
                width: '65px',
                height: '65px',
                background: 'linear-gradient(135deg, #d9d9dc17 0%rgba(8, 131, 254, 0.06)ff 100%)',
                padding: '8px',
               
              }}
            >
              <img 
                src="./gcart.png" 
                alt="G-CART Logo"
                style={{ width: '100%', height: 'auto', filter: 'brightness(1.2)' }}
              />
            </div>
            <span 
              className="fw-bold fs-4"
              style={{
                background: 'linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '1px',
                
              }}
            >
              G-CART
            </span>
          </Navbar.Brand>
        </Link>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          style={{
            borderColor: '#667eea',
            filter: 'invert(1)'
          }}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as="div">
              <Link 
                to={'/wishlist'} 
                className="d-flex align-items-center text-decoration-none px-3 py-2 rounded-3"
                style={{
                  color: '#e0e0ff',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 107, 157, 0.1)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#e0e0ff';
                }}
              >
                <div 
                  className="d-flex align-items-center justify-content-center me-2 rounded-2 position-relative"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 107, 157, 0.15)',
                    color: '#ff6b9d',
                    fontSize: '18px'
                  }}
                >
                  <i className="fa-solid fa-heart"></i>
                  {wishlist.length > 0 && (
                    <Badge 
                      pill
                      className="position-absolute"
                      style={{
                        top: '-6px',
                        right: '-6px',
                        background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
                        minWidth: '20px',
                        fontSize: '11px'
                      }}
                    >
                      {wishlist.length}
                    </Badge>
                  )}
                </div>
                <span>Wishlist</span>
              </Link>
            </Nav.Link>
            
            <Nav.Link as="div">
              <Link 
                to={'/cart'} 
                className="d-flex align-items-center text-decoration-none px-3 py-2 rounded-3"
                style={{
                  color: '#e0e0ff',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#e0e0ff';
                }}
              >
                <div 
                  className="d-flex align-items-center justify-content-center me-2 rounded-2 position-relative"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(102, 126, 234, 0.15)',
                    color: '#667eea',
                    fontSize: '18px'
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  {cart.length > 0 && (
                    <Badge 
                      pill
                      className="position-absolute"
                      style={{
                        top: '-6px',
                        right: '-6px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        minWidth: '20px',
                        fontSize: '11px'
                      }}
                    >
                      {cart.length}
                    </Badge>
                  )}
                </div>
                <span>Cart</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header