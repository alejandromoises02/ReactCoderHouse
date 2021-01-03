import React, { useContext, useState } from "react";
import {CartContext} from "../context/CartContext";
import { getFirestore } from '../firebase/index';
import { Link } from 'react-router-dom';



const Form =()=>{


    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email , setEmail ] = useState("");
    const [carrito, setCarrito] = useContext(CartContext);

  

    const NombreInputChange = (event) => {
      setName({[event.target.name] : event.target.value})
  }

    const PhoneInputChange = (event) => {
      setPhone({[event.target.name] : event.target.value})
  }
    const EmailInputChange = (event) => {
      setEmail({[event.target.name] : event.target.value})
    }

    const procesar = () => {
      if(name.length != 0 && phone.length != 0 && email.length != 0){
      
      
      let c=0;
      carrito.forEach(element => {
        c=c+(element.producto.precio*element.cantidad);
      });

      let venta = {
        buyer : {name:name, phone:phone, email:email},
        items : carrito,
        date  : new Date(),
        total : c
      }
      const db = getFirestore();
      db.collection("Ventas").add(venta)
      .then(({id}) => {
        alert("Gracias por tu compra! El id de tu operacion es "+ id)
      }
      )
      carrito.forEach(element => {
        element.producto.stock = element.producto.stock - element.cantidad;
        db.collection("productos").doc(element.producto.id).update(element.producto)
      });
       setCarrito([]);
       
      }
    }






    return(
      <>

<form class="datosCliente">

       
            
                <div class="form-row">
                  <div class="col">
                    <label for="nombre">Introduce tu Nombre</label>
                    <input type="text" name="nombre" onChange={NombreInputChange} id="nombre" required/>
                  </div>
            </div>

                  <div class="form-row">
                  <div class="col">
                    <label for="numero">Introduce tu Numero</label>
                    <input type="text" name="numero" onChange={PhoneInputChange} id="numero" required/>
                    </div>
            </div>


            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="email">Introduce tu Email</label>
                <input type="email" name="email" onChange={EmailInputChange} id="email" required/>
                </div>
            </div>

            <div class="form-group col-md-12">
            <button onClick={(e) => procesar(e)} class="btn btn-success">Confirmar Compra</button>
            
            </div>
          </form> 


        
    </>
    
    )
}

export default Form;
