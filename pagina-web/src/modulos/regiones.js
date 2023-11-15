import React, { useState, useEffect } from "react";
import "./Regiones.css";

function Regiones() {
  const [regiones, setRegiones] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [regionSeleccionada, setRegionSeleccionada] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/regiones")
      .then((response) => response.json())
      .then((data) => setRegiones(data))
      .catch((error) => console.error("Error:", error));
  }, []);

 
  const handleRegionChange = (event) => {
    const seleccionada = parseInt(event.target.value, 10);
    setRegionSeleccionada(seleccionada);

    if (seleccionada) {
      fetch(`http://localhost:3000/api/comunas-por-region/${seleccionada}`)
        .then((response) => response.json())
        .then((data) => setComunas(data))
        .catch((error) => console.error("Error:", error));
    } else {
      setComunas([]);
    }
  };

  return (
    <div className="regiones-container">
    <div className="regiones-header">
      <h2>Retiro en Tienda GRATIS</h2>
      <button className="close-button">X</button> 
    </div>
    <div className="select-container">
      <select onChange={handleRegionChange} value={regionSeleccionada}>
        <option value="">SELECCIONA TU REGIÓN</option>
        {regiones.map((region) => (
          <option key={region.id} value={region.id}>
            {region.nombre}
          </option>
        ))}
      </select>
      <span className="select-icon">▼</span> 
    </div>
    <div className="select-container">
      <select>
        <option value="">SELECCIONA TU COMUNA</option>
        {comunas.map((comuna) => (
          <option key={comuna.id_comuna} value={comuna.id_comuna}>
            {comuna.nombre_comuna}
          </option>
        ))}
      </select>
      <span className="select-icon">▼</span> 
    </div>
    <div className="tiendas-disponibles">
      Tiendas Disponibles:
    </div>
  </div>
  );
}

export default Regiones;
