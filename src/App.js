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
import {AggProvider} from './context/AggContext';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {


  return (
    <div class="container">
      <ProductProvider>
      <CartProvider>
        <AggProvider>
          <BrowserRouter>
            <NavBar/>
            <Switch>
            <Route exact path='/'>
            <Home greeting= "CharmClothes"/>
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
        </AggProvider>
      </CartProvider>
      </ProductProvider>
    </div>
  );
}

    
export default App;




