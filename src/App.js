import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/Item';

import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route exact path='/'>
        <Home greeting= "Hola Mundo"/>
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
    </div>
  );
}

    
export default App;

/*
<h1>{id}</h1>
 <ItemDetailContainer/>
 
 
 <BrowserRouter>
      <NavBar/>
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/cart">
          
        </Route>

      </Switch>
    
    </BrowserRouter>
    
    <ItemCount initial={1} min={0} max={10} onAdd={count}/>*/