import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import madera from './madera.png';
import './App.css';
import piedra from './piedra.png'; //<img src={madera} className="App-logo" alt="logo" />

function App() {
  const [cantidadMadera, setCantidadMadera] = useState(90);
  const [nivel, setNivel] = useState({
    nivel: 1,
    multiplicador: 1,
    costo: 0,
  });

  const comprarNivel = (cantidadMadera, costo, nivel) => {
    if (costo > cantidadMadera) return;
    setNivel(nivel);
    setCantidadMadera(cantidadMadera - costo);
  };

  const etiquetaBotonNivel = (
    cantidadMadera,
    costo,
    nivelActual,
    nivelBoton
  ) => {
    if (nivelActual >= nivelBoton) return 'Nivel Comprado!';
    if (costo > cantidadMadera) return 'Madera insuficiente';
    return 'Comprar';
  };

  const niveles = [
    {
      nivel: 2,
      multiplicador: 2,
      costo: 100,
    },
    {
      nivel: 3,
      multiplicador: 5,
      costo: 200,
    },
    {
      nivel: 4,
      multiplicador: 8,
      costo: 1000,
    },
    {
      nivel: 5,
      multiplicador: 20,
      costo: 10000,
    },
    {
      nivel: 6,
      multiplicador: 100,
      costo: 100000,
    },
  ];

  const ListaDeNiveles = () => {
    return (
      <div>
        {niveles.map((nivelLevel) => {
          if (nivel.nivel >= nivelLevel.nivel) return;
          return (
            <div className="niveles">
              <div>
                Nivel {nivelLevel.nivel}: Coste: {nivelLevel.costo}
              </div>
              <button
                className="btn btn-success"
                onClick={() =>
                  comprarNivel(cantidadMadera, nivelLevel.costo, nivelLevel)
                }
              >
                {etiquetaBotonNivel(
                  cantidadMadera,
                  nivelLevel.costo,
                  nivel.nivel,
                  nivelLevel.nivel
                )}
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="contenedor">
      <div className="contenedor-juego">
        <div className="menu-arriba-juego">
          <div>
            <img className="icono-madera" src={madera} />
            <div className="icono-madera-texto">{cantidadMadera}</div>
          </div>
          <div>
            <img className="icono-madera" src={piedra} />
            <div className="icono-madera-texto">No Implementado</div>
          </div>
        </div>
        <div className="menu-abajo-juego">
          <div>
            <div>Nivel actual: {nivel.nivel}</div>
            <button
              type="button"
              className="btn btn-light boton-madera"
              onClick={() =>
                setCantidadMadera(cantidadMadera + nivel.multiplicador)
              }
            >
              Madera
            </button>
          </div>
          {ListaDeNiveles()}
        </div>
      </div>
      <div className="contenedor-publicidad">
        <a
          href="https://www.instagram.com/tapir_de_los_montes/"
          target="_blank"
        >
          VISITANOS EN INSTAGRAM AHORA!
        </a>
      </div>
    </div>
  );
}

export default App;
