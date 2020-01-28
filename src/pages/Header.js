import React from 'react';
import header from './header.css';


const Header = props => {
  return (
    <div className="navbar">
      <div className="header-title">MATHOU EN TERRE INCONNUE <hr /></div>
      <div className="header2-title">ou comment donner des nouvelles à mémé</div>
      {props.children}
    </div>
  );
};

export default Header;
