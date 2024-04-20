import { useState, useEffect } from "react";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";
import axios from "axios";
const apiPokemon = "http://localhost:301/pokedex";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const consultarPokedex = async () => {
    let resultado = await axios.get(apiPokemon)
    setPokedex(resultado.data)
  }

  useEffect(()=>{
    consultarPokedex()
  }, [pokedex])

  function agregarAlCarrito(poke) {
    const itemExist = carrito.findIndex((item) => poke.id === item.id);
    const copyCarrito = [...carrito];
    if (itemExist == -1) {
      poke.cantidad = 1;
      return setCarrito([...carrito, poke]);
    }
    copyCarrito[itemExist].cantidad++;
    setCarrito(copyCarrito);
  }

  return (
    <>
      <Header carrito={carrito} />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {pokedex.map((pokemon) => (
            <Pokemon
              item={pokemon}
              key={pokemon.id}
              setCarrito={setCarrito}
              carrito={carrito}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
