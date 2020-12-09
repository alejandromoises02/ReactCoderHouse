import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCategoria from './components/ItemCategoria';
import Item from './components/Item';
import {CartProvider} from './context/CartContext';
import {ProductProvider} from './context/ProductContext';
import {ProductCatProvider} from './context/ProductCatContext';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {


  return (
    <div>
      <ProductProvider>
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

          <Route exact path='/category/:categoria'>
          <ProductCatProvider>
          <ItemCategoria/>
          </ProductCatProvider>
          </Route>

          <Route exact path='/cart'>
          <Cart/>
          </Route>
          </Switch>
        </BrowserRouter>  
      </CartProvider>
      </ProductProvider>
    </div>
  );
}

    
export default App;




