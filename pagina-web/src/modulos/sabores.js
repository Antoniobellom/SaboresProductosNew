import React, { useState, useEffect } from "react";
import "./sabores.css";

const Sabores = () => {
  const [sabores, setSabores] = useState([]);
  const [selectSabores, setSelectSabores] = useState("");

  useEffect(() => {
    const cargarSabores = async () => {
      try {
        const respuesta = await fetch("http://localhost:3000/api/sabores");
        console.log(respuesta);
        if (!respuesta.ok) {
          throw new Error(`HTTP error! status: ${respuesta.status}`);
        }
        const data = await respuesta.json();
        setSabores(Array.isArray(data) ? data : []);
        if (Array.isArray(data)) {
          setSabores(data);
          if (data.length > 0) {
            setSelectSabores(data[0].id);
          }
        } else {
          console.error("La respuesta no es un array:", data);
        }
      } catch (error) {
        console.error("No se pudieron cargar los sabores:", error);
      }
    };

    cargarSabores();
  }, []);

  const handleSelect = (e) => {
    setSelectSabores(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select
        value={selectSabores}
        onChange={handleSelect}
        className="dropdown-select"
        required
      >
        {sabores.map((sabor) => (
          <option key={sabor.id} value={sabor.id}>
            {sabor.nombre}
          </option>
        ))}
      </select>
      <div className="dropdown-arrow">⌄</div>
    </div>
  );
};

export default Sabores;
