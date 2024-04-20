import React from "react";

const ItemCarrito = ({ item }) => {
  const { nombre, tipo, cantidad, imagen, id } = item;
  return (
    <tr>
      <td>
        <img
          className="img-fluid"
          src={`./public/img/${imagen}.png`}
          alt={nombre}
        />
      </td>
      <td>{nombre}</td>
      <td className="fw-bold">{tipo}</td>
      <td className="flex align-items-start gap-4">
        <button type="button" className="btn btn-dark">
          -
        </button>
        {cantidad}
        <button type="button" className="btn btn-dark">
          +
        </button>
      </td>
      <td>
        <button className="btn btn-danger" type="button">
          X
        </button>
      </td>
    </tr>
  );
};

export default ItemCarrito;
