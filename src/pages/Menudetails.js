import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


const Menudetails = (props) => {
    console.log('props',props)
    return(
      
            <Col xl = {2} lg = {3} sm = {6} md = {6}>
            <Card style = {{height : '300px',width : '250px',marginTop : '15px',marginBottom : '15px'}}> 
               <Card.Header style = {{textAlign : 'center'}}>{props.details.restaurantChain}</Card.Header>
               <Card.Img variant='center' src={props.details.image} style = {{height : '150px',width : '200px',paddingLeft : '50px', display : 'flex',textAlign : 'center',justifySelf : 'center'}} />
               <Card.Body>
                    
               </Card.Body>
               <Link key = {props.details.id }to = {"./" + props.details.id}><Button style = {{backgroundColor : 'bisque',color : 'black', width : '100%'}}>Check Menu</Button></Link>
            </Card>
         </Col>
    
             
 
    )

}

export default Menudetails;