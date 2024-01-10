import {useState,useEffect} from 'react';
// import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menudetails from './Menudetails';


const Apikey = 'aaaa89d29126447985bd982356fe5384'
const Home = () => {
      const [pizzastate,setPizzaState] = useState(false);
      const [burger, setBurgerState] = useState(true);
      const [burgerData,setburgerData] = useState(null);
      const [pizzaData, setpizzaData] = useState(null);

      const fetchBurgerData = () => {
          fetch(`https://api.spoonacular.com/food/menuItems/search?query=burger&number=24&apiKey=${Apikey}`).then(res => res.json()).then(data => setburgerData(data.menuItems))
      }
       
      const fetchPizzaData = () => {
          fetch(`https://api.spoonacular.com/food/menuItems/search?query=pizza&number=24&apiKey=${Apikey}`).then(res => res.json()).then(data => setpizzaData(data.menuItems))
            
      }
       useEffect(() => {
            fetchBurgerData();
       },[]);

       const changePizza = (e) => {
            setPizzaState(e.target.checked);
            setBurgerState(false);
            fetchPizzaData();
       }
       const changeBurger = (e) => {
            setBurgerState(e.target.checked)
            setPizzaState(false);
            fetchBurgerData();
       }
        console.log('pizzastate',pizzastate);
        console.log('burgerstate', burger);
       return(
          <div>
               <form className='formblock' style = {{marginTop : '20px'}}>
                  <label> Please Enter Your Food Choice</label>
                 
                  <input type = 'radio' id = 'pizza'  name = 'select' checked = {pizzastate} onChange = {changePizza} />
                  <label htmlFor='pizza' >Pizza </label>

                  <input type = 'radio' id = 'burger'  name = 'select' checked = {burger} onChange = {changeBurger}/>
                  <label htmlFor='burger'  > Burger </label>

               </form>

            {/* <h3>Please Choose your restaurant</h3>    */}
           <Container fluid >
               <Row  >
               
                  { burgerData && burger && burger === true && burgerData.map((burger) => {
                          
                     return(     
                     <div style = {{display : 'flex',justifyContent : 'center',alignItems : 'center'}}>
                      <Menudetails style = {{justifySelf : 'center'}} details = {burger}/>
                      </div>
                    
                      )}
                   )}

                  { pizzaData && pizzastate && pizzastate === true && pizzaData.map((pizza) => {
                    
                     return(     
                    //   <Col >  
                      <Menudetails details = {pizza}/>
                    //    </Col>        
                      )}
                   )}
                 
               
               </Row>
           </Container>

         </div>  

       )


}

export default Home