import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { Row,Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/addtoCartSlice';

function Home() {
  const data  = useFetch("https://dummyjson.com/products")
  console.log(data);
  const dispatch = useDispatch()
  return (
  
  <Row>
    {
      data?.length>0?data?.map((product,index)=>(

      
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
          <Button onClick={()=>dispatch(addToWishlist(product))} className="btn btn-light" variant="primary"><i  className="fa-solid fa-basket-shopping text-danger"></i></Button>
          <Button onClick={()=>dispatch(addToCart(product))} className="btn btn-light" variant="primary"><i className="fa-solid fa-cart-shopping text-success"></i></Button>
        </div>
      </Card.Body>
    </Card>
  </Col>
    )):<p className='text-danger fw-bolder fs-4'>Nothing to Display</p>
    
  }
  </Row>


    
  )
}

export default Home