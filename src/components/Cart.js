import React, { useContext, useState } from "react";
import {CartContext} from "../context/CartContext"
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase/index';



const Cart =()=>{
 
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email , setEmail ] = useState("");
    const [carrito, setCarrito] = useContext(CartContext);

  

    const NombreInputChange = (event) => {
      setName({[event.target.name] : event.target.value})
      console.log(name);
  }

    const PhoneInputChange = (event) => {
      setPhone({[event.target.name] : event.target.value})
      console.log(phone);
  }
    const EmailInputChange = (event) => {
      setEmail({[event.target.name] : event.target.value})
      console.log(email);
    }

    const comprar = () => {
      let c=0;
      carrito.forEach(element => {
        c=c+(element.producto.precio*element.cantidad);
      });

      let venta = {
        buyer : {name:name, phone:phone, email:email},
        items : carrito,
        date  : new Date(),//getFirestore.firestore.Timestamp.fromDate(new Date()),
        total : c
      }
      console.log(venta);
      const db = getFirestore();
      db.collection("Ventas").add(venta)
      .then(({id}) => {
        alert("El id de tu compra es "+id)
      }
      )
      carrito.forEach(element => {
        element.producto.stock = element.producto.stock - element.cantidad;
        db.collection("productos").doc(element.producto.id).update(element.producto)
      });
      

    }

   
    
return (
    <>
    {carrito.length === 0 ? (
    <div>Aun no has cargado productos a tu carrito!!! compra <Link to={'/'}>aqui</Link>!!!</div>
  ) : (<>
    <div class="card">{carrito.map((element, index) => (<p>{element.cantidad} {element.producto.nombre} {element.producto.precio}</p>))}</div>
    <label for="nombre">Introduce tu nombre</label>
    <input type="text" name="nombre" onChange={NombreInputChange} id="nombre"></input>
    <label for="numero">Introduce tu numero</label>
    <input type="text" name="numero" onChange={PhoneInputChange} id="numero"></input>
    <label for="numero">Introduce tu email</label>
    <input type="text" name="email" onChange={EmailInputChange} id="email"/>
    <button onClick={(e) => comprar(e)}> Comprar </button>
    </>
  )
  }
    </>
  )

}

export default Cart;


