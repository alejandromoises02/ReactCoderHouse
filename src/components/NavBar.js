import React from 'react';
import CartIcon from './CartIcon';
import LogoIcon from './LogoIcon';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
const jog="Joggins";
const jeans="Jeans";
const top = "Tops";
const camperas = "Camperas";
const camisas = "Camisas";
const remeras = "Remeras";
const blusas = "Blusas";
const swe = "Sweaters"


    return (

        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <div class="navbar-brand"><LogoIcon /></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={'/'}>Inicio</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={'/category/'+jog}>Joggins</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page"to={'/category/'+jeans}>Jeans</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page"to={'/category/'+top}>Tops</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page"to={'/category/'+camperas}>Camperas</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page"to={'/category/'+camisas}>Camisas</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page"to={'/category/'+remeras}>Remeras</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page"to={'/category/'+blusas}>Blusas</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page"to={'/category/'+swe}>Sweaters</Link>
                </li>
            </ul>
            <Link class="d-flex flex-row align-items-center" to={'/cart'}><CartIcon /></Link>
            </div>
            </div>
        </nav>






        
     
        
    
    



      
        
        </>
    )

}

export default NavBar;