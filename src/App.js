import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemCount from './components/ItemCount';
import Item from './components/Item';
import './App.css';


const count = (counter) => {
  alert("El precio es :" + counter);
}

function App() {
  return (
    <div>
        <NavBar/>
        <Home greeting= "Hola Mundo"/>
        <ItemCount initial={1} min={0} max={10} onAdd={count}/>
        <Item/>
    </div>
  );
}

    
export default App;
