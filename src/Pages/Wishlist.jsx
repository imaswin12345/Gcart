import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/wishlistSlice';

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  return (
    <Row>
      {
        wishlistArray.length>0?
        wishlistArray.map((product,index)=>(
                <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
        
         <Card style={{width:'18rem',height:'29rem',marginTop:'50px'}} >
      <Card.Img style={{height:"200px"}} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
        <p>{product.description.slice(0,55)}</p>
        <h5>$ {product?.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className="btn btn-danger" variant="primary"><i className="fa-solid fa-trash"></i></Button>
          <Button className="btn btn-light" variant="primary"><i className="fa-solid fa-cart-shopping text-success"></i></Button>
        </div>
      </Card.Body>
    </Card>
  </Col>

        )):     <div className="text-center">
          <img
            style={{ width: '200px', marginBottom: '10px' }}
            src="./cart.png"
            alt="Empty cart"
          />
          <h4>Your Wishlist is Empty</h4>
          <Link to={'/'}>
            <Button className="btn btn-primary mt-2">Back to Home</Button>
          </Link>
        </div>
      }
    </Row>
  )
}

export default Wishlist