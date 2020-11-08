import logo from './logo.svg';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemCount from './components/ItemCount';
import './App.css';

function App() {
  return (
    <div>
        <NavBar/>
        <Home greeting= "Hola Mundo"/>
        <ItemCount initial="1" min="0" max="10" onAdd/>
    </div>
  );
}

    
export default App;
