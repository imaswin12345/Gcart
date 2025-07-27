import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Link  style={{textDecoration:'none',color:"black",fontWeight:"bold",marginRight:"20px"}} to={'./'}><Navbar.Brand >
          <img src="./gcart.png" alt="logo"
        style={{ 
        width: '40px',  
        height: 'auto', 
        marginRight: '0px',
      marginBottom:'6px' }}
       />G-CART</Navbar.Brand>
       </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link className='ms-2 align-items-center d-flex ' style={{textDecoration:'none',color:"black",fontWeight:"bold"}} to={'/wishlist'}><i className="fa-solid fa-basket-shopping text-danger"></i>WISHLIST<Badge className='ms-2 rounded' bg="light">{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link className='ms-2' style={{textDecoration:'none',color:"black",fontWeight:"bold"}} to={'/cart'}><i className="fa-solid fa-cart-shopping text-success"></i>CART<Badge className='ms-2 rounded' bg="light">{cart.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header