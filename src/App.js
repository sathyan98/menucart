import React from 'react';
import {createBrowserRouter,Outlet, RouterProvider} from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import Cart from './pages/Cart'
import About from './pages/About';
import Menuinfo from './pages/Menuinfo';
import {Provider} from 'react-redux';
import appStore from './shared/reducerStore'


console.log('appstore',appStore)
const Layout = () => {
  return (
    < >
    <Provider store = {appStore}>
        <Header />
        <Outlet />
     </Provider>
    </>
  );
}

const appLayout = createBrowserRouter([
  {path : "/", 
   element : <Layout />,
   children : [
          {path : "/", element : <Home />},
          {path : "/about", element : <About />},
          {path : "/:id", element : <Menuinfo />},
          {path: "/cart", element : <Cart />}
  ]}
])

const App = () => {
 
   return (
        <RouterProvider router = {appLayout} />
   )
}

export default App;

