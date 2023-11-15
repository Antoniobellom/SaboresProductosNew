import React from "react";
import "./Lower.css";

const Lower = () => {
  return (
    <div class="below-footer">
      <div class="container">
        <div class="column">
          <h3>Puntos de Retiro</h3>
          <ul>
            <li>Tienda Brand Santiago</li>
            <li>Tienda Brand Viña del Mar</li>
          </ul>
        </div>
        <div class="column">
          <h3>Servicio al Cliente</h3>
        </div>
        <div class="column">
          <h3>Mi cuenta</h3>
        </div>
        <div class="column">
          <h3>Sobre Nosotros</h3>
        </div>
        <div class="column">
          <h3>Contáctanos</h3>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Brand © Todos los derechos reservados</p>
      </div>
    </div>
  );
};

export default Lower;
