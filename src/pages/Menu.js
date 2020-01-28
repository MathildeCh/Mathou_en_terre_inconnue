import React, { Component } from 'react';
import Header from './Header';
import header from './header.css';


const Menu = (props) => {
  return(
    <header className="root">
      <div className="navbar">
        <div className="header-title">MATHOU EN TERRE INCONNUE <hr className="hr"/></div>
        <div className="header2-title">ou comment donner des nouvelles à mémé</div>
        {props.children}
      </div>
      <div className="menu">
        <ul>
          <li><a href="/">ACCUEIL</a></li>
          <li><a href="/pre-voyage">LE PRE VOYAGE</a></li>
          <li><a href="/voyage">LE VOYAGE</a></li>
          <li><a href="/apres-voyage">L'APRES VOYAGE</a></li>
          <li><a href="/galerie">GALERIE</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Menu;
