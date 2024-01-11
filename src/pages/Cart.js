import {useDispatch,useSelector} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardBody, CardText, CardTitle } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

 const Cart = () => {
   const data = useSelector((state) => state.cartReducer.cart);
   console.log('data',data); 
   return(
    <Container style={{marginTop : '20px'}}>
         {data && data.length > 0 && data.map((item) => {
           return( 
            
           <Row style = {{display : 'flex', flexBasis : '80%', justifyContent : 'center',marginTop : '10px'}}>
                      <Card style = {{display : 'flex',flexBasis : '80%',flexShrink : '2'}}>
                          <Card.Header style = {{textAlign : 'center'}}>{item.restaurantChain}</Card.Header>
                          <Card.Body style = {{textAlign : 'center'}}>
                              
                                  <div >Item Selected : {item.title}</div>
                            
                          </Card.Body>
                      </Card>
                </Row>
           )
         })
        }
        {data && data.length == 0 &&
              <div style = {{textAlign : 'center'}}>There are no items in the cart Please visit <Link to = {'/'}>Home </Link> to order the food</div>
        }
    </Container>
   )
}

export default Cart