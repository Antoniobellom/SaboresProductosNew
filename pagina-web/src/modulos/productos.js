import React, { useState, useEffect } from "react";
import Sabores from "./sabores";
import "./productos.css";
import ModalRegiones from "./modal/Modal";
import Regiones from "./regiones";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [opcionEntrega, setOpcionEntrega] = useState("domicilio");
  const [cantidad, setCantidad] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpcionEntregaChange = (event) => {
    setOpcionEntrega(event.target.value);
    if (event.target.value === "tienda") {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const respuesta = await fetch("http://localhost:3000/api/productos");
        if (!respuesta.ok) {
          throw new Error(`HTTP error! status: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        setProductos(datos);

        if (datos.length > 0) {
          setProductoSeleccionado(datos[0]);
        }
      } catch (error) {
        console.error("No se pudieron cargar los productos:", error);
      }
    };
    cargarProductos();
  }, []);

  const handleSelect = (e) => {
    const productoEncontrado = productos.find(
      (p) => p.id.toString() === e.target.value
    );
    setProductoSeleccionado(productoEncontrado);
  };

  const precioConDescuento = (precio, descuento) => {
    return (precio - (precio * descuento) / 100).toFixed(2);
  };

  return (
    <div className="producto">
      {productoSeleccionado && (
        <>
          <ModalRegiones
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <Regiones />
          </ModalRegiones>
          <p>brand</p>
          <h2 className="nombre-producto">{productoSeleccionado.nombre}</h2>
          <div className="precio-producto">
            <span className="descuento">{productoSeleccionado.descuento}%</span>
            <span className="precio-original">
              ${productoSeleccionado.precio}
            </span>
            <span className="precio-descuento">
              $
              {precioConDescuento(
                productoSeleccionado.precio,
                productoSeleccionado.descuento
              )}
            </span>
          </div>
          <p className="sku-producto">SKU {productoSeleccionado.sku}</p>
          <p className="descripcion-producto">
            {productoSeleccionado.descripcion}
          </p>
          <p>Escoge sabores</p>
          <Sabores sabores={productoSeleccionado.sabores} />
          <div className="cantidad-productos">
            <button
              className="btn-producto"
              onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}
            >
              -
            </button>
            {cantidad}
            <button
              className="btn-producto"
              onClick={() => setCantidad(cantidad + 1)}
            >
              +
            </button>
            <button className="btn-agregar-producto">Agregar al carrito</button>
          </div>
          <div className="entrega-producto">
            <form>
              <input
                className="radio-input"
                type="radio"
                id="domicilio"
                name="opcionEntrega"
                value="domicilio"
                checked={opcionEntrega === "domicilio"}
                onChange={handleOpcionEntregaChange}
              />
              <label htmlFor="domicilio" className="radio-label">
                Despacho a domicilio
              </label>

              <input
                className="radio-input"
                type="radio"
                id="tienda"
                name="opcionEntrega"
                value="tienda"
                checked={opcionEntrega === "tienda"}
                onClick={handleOpenModal}
                onChange={handleOpcionEntregaChange} 
              />
              <label htmlFor="tienda" className="radio-label retiro-gratis">
                Retiro en tienda GRATIS
              </label>
            </form>
          </div>
          <div className="producto-valoracion"></div>
        </>
      )}
    </div>
  );
};

export default Productos;
