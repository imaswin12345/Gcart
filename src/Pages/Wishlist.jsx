import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/addtoCartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer)
  const dispatch = useDispatch()
  
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
          <i className="fa-solid fa-heart me-3" style={{ color: '#ff6b9d' }}></i>
          My Wishlist
        </h2>
        <p style={{ color: '#a0a0c0', fontSize: '16px' }}>
          {wishlistArray.length > 0 
            ? `You have ${wishlistArray.length} item${wishlistArray.length > 1 ? 's' : ''} in your wishlist` 
            : 'Your wishlist is empty'}
        </p>
      </div>

      <Row className="g-4">
        {
          wishlistArray.length > 0 ?
            wishlistArray.map((product, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <Card 
                  style={{
                    background: 'linear-gradient(145deg, #1e1e2e, #252535)',
                    border: '1px solid #2a2a3e',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.5)';
                    e.currentTarget.style.borderColor = '#3a3a5e';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.borderColor = '#2a2a3e';
                  }}
                >
                  {/* Image Section */}
                  <div 
                    style={{
                      position: 'relative',
                      height: '240px',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%)'
                    }}
                  >
                    <Card.Img 
                      variant="top" 
                      src={product?.thumbnail}
                      alt={product?.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    
                    {/* Price Badge */}
                    <Badge
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                  background: ' #667eea',
                        color: '#fff',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontWeight: '700',
                        fontSize: '18px',
                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                        letterSpacing: '0.5px'
                      }}
                    >
                      ${product?.price}
                    </Badge>
                  </div>
                  
                  {/* Card Body */}
                  <Card.Body 
                    style={{
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      background: 'linear-gradient(145deg, #1e1e2e, #252535)'
                    }}
                  >
                    <Card.Title 
                      style={{
                        color: '#e0e0ff',
                        fontSize: '20px',
                        fontWeight: '700',
                        marginBottom: '12px',
                        lineHeight: '1.3',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {product?.title}
                    </Card.Title>
                    
                    <Card.Text 
                      style={{
                        color: '#a0a0c0',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        flexGrow: 1
                      }}
                    >
                      {product.description.slice(0, 55)}...
                    </Card.Text>
                    
                    {/* Action Buttons */}
                    <div className='d-flex gap-3 mt-auto'>
                      <Button 
                        onClick={() => dispatch(removeFromWishlist(product.id))}
                        style={{
                          background: 'linear-gradient(135deg, #2a2a3e 0%, #3a3a5e 100%)',
                          border: 'none',
                          borderRadius: '12px',
                          padding: '12px',
                          fontSize: '16px',
                          transition: 'all 0.3s ease',
                          color: '#ff6b9d',
                          width: '48px',
                          height: '48px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)';
                          e.currentTarget.style.color = '#fff';
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 107, 157, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #2a2a3e 0%, #3a3a5e 100%)';
                          e.currentTarget.style.color = '#ff6b9d';
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        title="Remove from Wishlist"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                      
                      <Button 
                        onClick={() => dispatch(addToCart(product))}
                        style={{
                          background: ' #667eea',
                          border: 'none',
                          borderRadius: '12px',
                          padding: '12px 20px',
                          fontSize: '15px',
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          color: '#fff',
                          flex: 1,
                          height: '48px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
                          e.currentTarget.style.transform = 'scale(1.02)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        title="Add to Cart"
                      >
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>Add to Cart</span>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
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
                    className="fa-solid fa-heart-crack"
                    style={{
                      fontSize: '80px',
                      color: '#ff6b9d',
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
                  Your Wishlist is Empty
                </h3>
                
                <p 
                  style={{
                    color: '#a0a0c0',
                    fontSize: '16px',
                    marginBottom: '30px',
                    maxWidth: '400px'
                  }}
                >
                  Start adding items to your wishlist and keep track of products you love!
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
                    Back to Home
                  </Button>
                </Link>
              </div>
            </Col>
        }
      </Row>
    </div>
  )
}

export default Wishlist