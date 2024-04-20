import React from "react";
import ItemCarrito from "./ItemCarrito";

const Header = ({ carrito }) => {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./img/pokemon.png"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="./img/pokemon.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                <p className="text-center">El carrito esta vacio</p>
                <table className="w-100 table">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Tipo</th>
                      <th>Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.map((item) => (
                      <ItemCarrito key={item.id} item={item} />
                    ))}
                  </tbody>
                </table>

                <p className="text-end">
                  Total pagar: <span className="fw-bold">$899</span>
                </p>
                <button className="btn btn-dark w-100 mt-3 p-2">
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
