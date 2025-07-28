import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/addtoCartSlice'

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()
  const getCartTool = ()=>{
    if(cartArray.length>0){

      setTotal(cartArray.map(item=>item.price).
    reduce((p1,p2)=>p1+p2))


    }else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    getCartTool()
  },[cartArray])


  const handleCart = ()=>{
    dispatch(emptyCart())

    alert("order Successfully placed")

    navigate('/')

  } 
  return (
    <div className='container' style={{ marginTop: '100px' }}>
      {cartArray.length > 0 ? (
        <Row className="gap-4">
          <Col md={8} lg={6}>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ width: '50px' }}
                      />
                    </td>
                    <td>${product.price}</td>
                    <td>
                      <Button
                        onClick={() => dispatch(removeFromCart(product.id))}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>

          <Col md={4}>
            <div className='border p-4 rounded bg-light shadow'>
              <h3 className='mb-3'>Cart Summary</h3>
              <p>Total Products: <strong>{cartArray.length}</strong></p>
              <p>Total: <span className='text-danger fw-bold fs-4'>${total}</span></p>
              <Button onClick={handleCart} variant='success'>Check Out</Button>
            </div>
          </Col>
        </Row>
      ) : (
        <div className="text-center">
          <img
            style={{ width: '200px', marginBottom: '10px' }}
            src="./cart.png"
            alt="Empty cart"
          />
          <h4>Your Cart is Empty</h4>
          <Link to={'/'}>
            <Button className="btn btn-primary mt-2">Back to Home</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
