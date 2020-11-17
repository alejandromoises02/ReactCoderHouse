import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

import './App.css';



function App() {
  return (
    <div>
        <NavBar/>
        <Home greeting= "Hola Mundo"/>
        <ItemDetailContainer/>
        
    </div>
  );
}

    
export default App;

/*<BrowserRouter>
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