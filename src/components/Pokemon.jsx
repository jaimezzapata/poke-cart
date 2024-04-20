import React from "react";

const Pokemon = ({ item, setCarrito, carrito, agregarAlCarrito }) => {
  const { nombre, imagen, tipo, descripcion, id } = item;
  const handleClick = (item) => {
    setCarrito([...carrito, item]);
  };
  return (
    <div className="card col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-5">
        <img
          className="img-fluid"
          src={`./img/${imagen}.png`}
          alt={nombre}
        />
      </div>
      <div className="col-7">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{nombre}</h3>
        <section className="card-body">
          <p>{descripcion}</p>
          <p className="fw-black text-primary fs-3">{tipo}</p>
        </section>
        <button
          onClick={() => agregarAlCarrito(item)}
          type="button"
          className="btn btn-dark w-100"
        >
          Agregar al Carrito
        </button>
      </div>
      <div className="card-body d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-primary w-100">
          Editar
        </button>
        <button type="button" className="btn btn-dark w-100">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
