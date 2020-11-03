import React from 'react';
import CartIcon from './CartIcon';

const NavBar = () => {



    return (

        <div className="wrapper" >

            <ul className="nav-wrapper">

                <a href="#"><li>Inicio</li></a>

                <a href="#"><li>Nosotros</li></a>

                <a href="#"><li>Comprar</li></a>

                <a href="#"><li>Contacto</li></a>

                <a href="#"><li><CartIcon /></li></a>

            </ul>

        </div>

    )

}

export default NavBar;