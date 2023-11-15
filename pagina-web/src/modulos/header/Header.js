import React from 'react';
import './header.css';

const Header = () => {
  return (
      <>
        <div className="header-container">
      <div className="top-bar">
        <span className="discount-message">15% OFF EN TODO CON EL CÓDIGO: XX15OFF</span>
        <div className="top-bar-links">
          <a href="#iniciar-sesion" className="top-link">Iniciar Sesión</a>
          <a href="#seguimiento" className="top-link">Seguimiento</a>
          <a href="#tiendas" className="top-link">Tiendas</a>
        </div>
      </div>
      <header className="header">
      </header>
    </div>
    <header className="header">
      <div className="brand-container">
        <a href="#home" className="brand">BRAND</a>
      </div>
      <div className="bottom-container">
        <nav className="navigation">
          <a href="#shopall" className="nav-link">SHOP ALL</a>
          <a href="#bestseller" className="nav-link">BEST SELLER</a>
          <a href="#bestseller" className="nav-link">PROTEINAS</a>
          <a href="#bestseller" className="nav-link">SUPLEMENTOS</a>
          <a href="#bestseller" className="nav-link">PRE ENTRENOS</a>
          <a href="#bestseller" className="nav-link">ACCESORIOS</a>
          <a href="#bestseller" className="nav-link">BARRAS Y SNACKS</a>
        </nav>
        <div className="icons-right">
          <button className="icon-button">Buscar</button>
          <button className="icon-button">Carrito</button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
