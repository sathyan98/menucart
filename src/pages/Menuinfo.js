import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardBody, CardText, CardTitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {enterCartItems} from '../shared/cartReducer'

const Apikey = 'aaaa89d29126447985bd982356fe5384'
const Menuinfo = (props) => {
   const [data,setData] = useState(null);

   const {id} = useParams();
   const dispatch = useDispatch();
    
    useEffect(() => {
         fetch(`https://api.spoonacular.com/food/menuItems/${id}?apiKey=${Apikey}`).then(res => res.json()).then(data => setData(data))
    },[])

    const handleData = (data) => {
         dispatch(enterCartItems(data));
    }
    console.log('data',data);
    return(
        <Container style = {{marginTop : '40px',display : 'flex',justifyContent : 'center',flexBasis : '90%'}}>
            <Row  >
                <div  >
                   <Col >
                   {data  && 
                     <Card style = {{height : '600px', flexBasis : '50%'}}>
                         <Card.Header style = {{textAlign : 'center'}}>Menuinfo</Card.Header>
                         <CardBody style = {{flexShrink : '2'}}>
                         <Row style={{justifyContent : 'center',paddingTop : '5px'}}>   
                         {data && data != null &&  data.images.map( image => { 
                           return  <Card.Img variant='center' src={image} style = {{height : '100px',width : '200px'}} />
                         })
                         }
                         </Row>
                         <Row style={{justifyContent : 'center',paddingTop : '5px'}}>
                             <CardText >Total Calories Included for {data?.images.length} {data?.title} are {data?.nutrition.calories} </CardText>
                         </Row>
                         <Row style={{justifyContent : 'center',paddingTop : '5px'}}>
                             <CardText >Total Calories Included for {data?.images.length} {data?.title} are {data?.nutrition.protein} </CardText>
                              
                         </Row>
                        <Row style={{justifyContent : 'center',paddingTop : '5px'}}>
                            <CardText >Total Calories Included for {data?.images.length} {data?.title} are {data?.nutrition.fat} </CardText>
                             
                        </Row>
                        <Row style={{justifyContent : 'center',paddingTop : '5px'}}>
                        <CardText >Total Calories Included for {data?.images.length} {data?.title} are {data?.nutrition.carbs} </CardText>
                            
                        </Row>
                                  
                         </CardBody>
                             <Link to = {"/cart"}><Button style = {{backgroundColor : 'bisque',color : 'black', width : '100%'}} 
                              onClick = {() => handleData(data)}
                             >Add to Cart</Button></Link>

                    </Card>
                    } 
                   </Col> 
                </div>
            </Row>
        </Container>
    )
}

export default Menuinfo