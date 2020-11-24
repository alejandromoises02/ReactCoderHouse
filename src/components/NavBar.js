import React from 'react';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';

const NavBar = () => {



    return (

        <div className="wrapper" >

            <ul className="nav-wrapper">

                <a href="#"><Link to={'/'}>Inicio</Link></a>

                <a href="#"><li>Nosotros</li></a>

                <a href="#"><li>Comprar</li></a>

                <a href="#"><li>Contacto</li></a>

                <a href="#"><Link to={'/cart'}><CartIcon /></Link></a>

            </ul>

        </div>

    )

}

export default NavBar;