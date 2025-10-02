import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { Row, Col, Card, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/addtoCartSlice'

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  
  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map(item => item.price).reduce((p1, p2) => p1 + p2))
    } else {
      setTotal(0)
    }
  }
  
  useEffect(() => {
    getCartTotal()
  }, [cartArray])

  const handleCheckout = () => {
    dispatch(emptyCart())
    alert("Order Successfully Placed!")
    navigate('/')
  }
  
  return (
    <div style={{ minHeight: '80vh', padding: '20px' }}>
      {/* Page Header */}
      <div className="text-center mb-5 mt-4">
        <h2 
          style={{
            color: '#e0e0ff',
            fontWeight: '700',
            fontSize: '36px',
            marginBottom: '10px'
          }}
        >
          <i className="fa-solid fa-cart-shopping me-3" style={{ color: '#667eea' }}></i>
          Shopping Cart
        </h2>
        <p style={{ color: '#a0a0c0', fontSize: '16px' }}>
          {cartArray.length > 0 
            ? `You have ${cartArray.length} item${cartArray.length > 1 ? 's' : ''} in your cart` 
            : 'Your cart is empty'}
        </p>
      </div>

      {cartArray.length > 0 ? (
        <Row className="g-4 justify-content-center">
          {/* Cart Items Table */}
          <Col xs={12} lg={8}>
            <Card
              style={{
                background: "#0A1128", 
                border: '1px solid #2a2a3e',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              <Card.Body style={{ padding: '0' }}>
                <div style={{ overflowX: 'auto' }}>
                  <Table 
                    hover 
                    responsive
                    style={{
                      margin: '0',
                      color: '#e0e0ff'
                    }}
                  >
                    <thead>
                      <tr style={{ borderBottom: '2px solid #3a3a5e' }}>
                        <th style={{ 
                          background: "#0A1128", 
                          color: '#e0e0ff',
                          fontWeight: '600',
                          padding: '16px',
                          borderBottom: 'none'
                        }}>#</th>
                        <th style={{ 
                         background: "#0A1128", 
                          color: '#e0e0ff',
                          fontWeight: '600',
                          padding: '16px',
                          borderBottom: 'none'
                        }}>Product</th>
                        <th style={{ 
                         background: "#0A1128", 
                          color: '#e0e0ff',
                          fontWeight: '600',
                          padding: '16px',
                          borderBottom: 'none'
                        }}>Image</th>
                        <th style={{ 
                          background: "#0A1128", 
                          color: '#e0e0ff',
                          fontWeight: '600',
                          padding: '16px',
                          borderBottom: 'none'
                        }}>Price</th>
                        <th style={{ 
                         background: "#0A1128", 
                          color: '#e0e0ff',
                          fontWeight: '600',
                          padding: '16px',
                          borderBottom: 'none'
                        }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartArray.map((product, index) => (
                        <tr 
                          key={index}
                          style={{
                            borderBottom: '1px solid #2a2a3e',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(102, 126, 234, 0.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          <td style={{ 
                            padding: '16px',
                            color: '#a0a0c0',
                            verticalAlign: 'middle'
                          }}>
                            {index + 1}
                          </td>
                          <td style={{ 
                            padding: '16px',
                            color: '#e0e0ff',
                            fontWeight: '500',
                            verticalAlign: 'middle',
                            maxWidth: '250px'
                          }}>
                            {product.title}
                          </td>
                          <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                            <img
                              src={product.thumbnail}
                              alt={product.title}
                              style={{ 
                                width: '60px',
                                height: '60px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                border: '2px solid #3a3a5e'
                              }}
                            />
                          </td>
                          <td style={{ 
                            padding: '16px',
                            color: '#667eea',
                            fontWeight: '600',
                            fontSize: '18px',
                            verticalAlign: 'middle'
                          }}>
                            ${product.price}
                          </td>
                          <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                            <Button
                              onClick={() => dispatch(removeFromCart(product.id))}
                              style={{
                               background: "#0A1128", 
                                border: 'none',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                fontSize: '14px',
                                transition: 'all 0.3s ease',
                                color: '#ff6b9d'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)';
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.transform = 'scale(1.05)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #2a2a3e 0%, #3a3a5e 100%)';
                                e.currentTarget.style.color = '#ff6b9d';
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                              title="Remove from cart"
                            >
                              <i className="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Cart Summary */}
          <Col xs={12} lg={4}>
            <Card
              style={{
              background: "#0A1128", 
                border: '1px solid #2a2a3e',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                position: 'sticky',
                top: '100px'
              }}
            >
              <Card.Body style={{ padding: '32px' }}>
                <h3 
                  style={{
                    color: '#e0e0ff',
                    fontWeight: '700',
                    fontSize: '24px',
                    marginBottom: '24px',
                    borderBottom: '2px solid #3a3a5e',
                    paddingBottom: '16px'
                  }}
                >
                  Cart Summary
                </h3>
                
                <div style={{ marginBottom: '20px' }}>
                  <div 
                    className="d-flex justify-content-between align-items-center mb-3"
                    style={{ padding: '12px 0', borderBottom: '1px solid #2a2a3e' }}
                  >
                    <span style={{ color: '#a0a0c0', fontSize: '16px' }}>
                      Total Products:
                    </span>
                    <span 
                      style={{
                        color: '#e0e0ff',
                        fontWeight: '600',
                        fontSize: '18px'
                      }}
                    >
                      {cartArray.length}
                    </span>
                  </div>
                  
                  <div 
                    className="d-flex justify-content-between align-items-center"
                    style={{ padding: '12px 0' }}
                  >
                    <span style={{ color: '#a0a0c0', fontSize: '16px' }}>
                      Subtotal:
                    </span>
                    <span 
                      style={{
                   background: "#0A1128", 
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: '700',
                        fontSize: '28px'
                      }}
                    >
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <Button
                  onClick={handleCheckout}
                  className="w-100"
                  style={{
                    background: "#0A1128", 
                    border: 'none',
                    borderRadius: '12px',
                    padding: '16px',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(102, 126, 234, 0.4)',
                    marginTop: '24px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.4)';
                  }}
                >
                  <i className="fa-solid fa-credit-card me-2"></i>
                  Proceed to Checkout
                </Button>
                
                <div 
                  className="text-center mt-3"
                  style={{ 
                    color: '#a0a0c0',
                    fontSize: '12px'
                  }}
                >
                  <i className="fa-solid fa-lock me-1"></i>
                  Secure Checkout
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-center">
          <Col xs={12}>
            <div 
              className="text-center d-flex flex-column align-items-center justify-content-center"
              style={{ 
                minHeight: '60vh',
                padding: '40px'
              }}
            >
              <div
                style={{
                  width: '200px',
                  height: '200px',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '30px',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.2)'
                }}
              >
                <i 
                  className="fa-solid fa-cart-shopping"
                  style={{
                    fontSize: '80px',
                    color: '#667eea',
                    opacity: '0.7'
                  }}
                ></i>
              </div>
              
              <h3 
                style={{
                  color: '#e0e0ff',
                  fontWeight: '700',
                  fontSize: '28px',
                  marginBottom: '15px'
                }}
              >
                Your Cart is Empty
              </h3>
              
              <p 
                style={{
                  color: '#a0a0c0',
                  fontSize: '16px',
                  marginBottom: '30px',
                  maxWidth: '400px'
                }}
              >
                Looks like you haven't added anything to your cart yet. Start shopping now!
              </p>
              
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Button
                  style={{
                    background: ' #667eea',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '14px 32px',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(102, 126, 234, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.4)';
                  }}
                >
                  <i className="fa-solid fa-home me-2"></i>
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default Cart