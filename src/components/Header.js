import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'

const Header = () => {
      const [state,setState] = useState(0);
      const reducerState = useSelector((store) => store.cartReducer.cartArray);
      console.log('reducerState',reducerState)
       return(
            // <header className='headers'>
            <div className = "header">
             <div className='header-right'>
                <Link style = {{textDecoration :  'none'}}  to = "/">Home</Link> 
                <Link style = {{textDecoration : 'none'}} to = "/cart"> Cart - {state} </Link> 
                <Link style = {{textDecoration : 'none',marginRight : '20px'}} to = "/about"> About </Link> 
                
              </div>
            </div>  
           

       )


}

export default Header