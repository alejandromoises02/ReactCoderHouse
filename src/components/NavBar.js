import React from 'react';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';

const NavBar = () => {
const jog="Joggins";
const jeans="Jeans";

    return (

        <div className="wrapper" >

            <ul className="nav-wrapper">

                <li><Link to={'/'}>Inicio</Link></li>

                <li><Link to={'/category/'+jog}>Joggins</Link></li>

                <li><Link to={'/category/'+jeans}>Jeans</Link></li>

                <li>Contacto</li>

                <Link to={'/cart'}><CartIcon /></Link>

            </ul>

        </div>

    )

}

export default NavBar;