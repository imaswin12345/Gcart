import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { Row, Col, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/addtoCartSlice';

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  console.log(data);
  const dispatch = useDispatch()
  
  // Define a single solid color for the card background
  const solidCardBackground = '#1e1e2e'; // Rich dark color

  return (
    <Row className="g-4 p-4">
      {
        data?.length > 0 ? data?.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Card 
              style={{
                // Changed to a single solid background color
                background: solidCardBackground, 
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
                  // Changed to a single solid background color for the image container placeholder
                  background: solidCardBackground 
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
                
                {/* Price Badge - kept as gradient for highlight */}
                <Badge
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: ' #002fffff ',
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
                  // Changed to a single solid background color
                  background: solidCardBackground
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
                
                {/* Action Buttons - keeping the inner button gradients for visual flair */}
                <div className='d-flex gap-3 mt-auto'>
                  <Button 
                    onClick={() => dispatch(addToWishlist(product))}
                    style={{
                      background: 'linear-gradient(135deg, #2a2a3e 0%, #3a3a5e 100%)', // Keep gradient for button depth
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
                    title="Add to Wishlist"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </Button>
                  
                  <Button 
                    onClick={() => dispatch(addToCart(product))}
                    style={{
                      background: ' #667eea', // Keep gradient for button depth
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
                      e.currentTarget.style.background = ' #667eea 100%';
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = ' #667eea 100%';
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
        )) : (
          <Col className="text-center py-5">
            <p 
              style={{
                color: '#ff6b9d',
                fontSize: '24px',
                fontWeight: '700',
                textAlign: 'center',
                padding: '60px 0'
              }}
            >
              Nothing to Display
            </p>
          </Col>
        )
      }
    </Row>
  )
}

export default Home