import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCart} from '../redux/addtoCartSlice';

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
    const dispatch = useDispatch()
  return (
     <Row>
      {
        cartArray.length>0?
        cartArray.map((product,index)=>(
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
          <Button onClick={()=>dispatch(removeFromCart(product.id))} className="btn btn-danger" variant="primary"><i className="fa-solid fa-trash"></i></Button>
          
        </div>
      </Card.Body>
    </Card>
  </Col>

        )): <div >
          <img 
          style={{marginLeft:"480px"}}
          src="./cart.png"   
          alt="" 
          
          />
          <h4 style={{marginLeft:"630px"}} >Your Cart is Empty</h4>
          <Link style={{marginLeft:"700px"}} to={'/'}><Button className='btn btn-primary'>Back to Home</Button></Link>
        </div>
      }
    </Row>
  )
}

export default Cart