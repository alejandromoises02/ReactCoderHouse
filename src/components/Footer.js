import React from 'react';
import LogoWhs from './LogoWhs';
import LogoInsta from './LogoInsta';
import LogoFace from './LogoFace';
import LogoIcon from './LogoIcon';
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {



    return (

        <>
        <footer className="container-fluid d-flex justify-content-around align-items-center">
        <LogoIcon /><LogoInsta /><LogoFace /><LogoWhs />

        </footer>
        </>
    )

}

export default Footer;