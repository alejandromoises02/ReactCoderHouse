import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/Item';
import {CartProvider} from './context/CartContext';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {


  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Switch>
          <Route exact path='/'>
          <Home greeting= "COMPUMUNDO HIPERMEGA RED"/>
          <Item/>
          </Route>
          <Route exact path='/item/:id'>
          <ItemDetailContainer/>
          </Route>
          <Route exact path='/cart'>
          <Cart/>
          </Route>
          </Switch>
        </BrowserRouter>  
      </CartProvider>
    </div>
  );
}

    
export default App;




