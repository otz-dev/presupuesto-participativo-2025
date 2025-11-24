import logo from './logo.svg';
import './App.css';
import { Lista } from './proyectos-aceptados/lista-de-proyectos';
import {ListaDeCentros} from './centro-de-votacion/lista-de-centros';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Skatepark 360 Durango
      </header>
      <div>
        <h1>Presupuesto participativo</h1>
        <div style={{
          textAlign: 'center'
        }}>
          <p>Hola! el Skatepark 360 está participando en el <strong>Presupuesto Participativo 2025</strong>. Estamos solicitando la <strong>instalación de un Domo </strong> en una de las pistas del skate.
          El domo nos servirá para poder patinar incluso en temporada de lluvias, unete a la causa y vota por el <strong>proyecto #273 el día 7 de Diciembre </strong>.
          Ubica tu casilla  y conoce los otros proyectos que participan para el distrito 1</p>
        </div>
        {/* <Lista /> */}
        <ListaDeCentros />
      </div>
    </div>
  );
}

export default App;
