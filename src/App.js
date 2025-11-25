import './App.css';
import {ProyectoParticipativoTabs} from './pp-tabs/tabs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Skatepark 360 Durango
      </header>
      <div>
        <h1>Presupuesto participativo</h1>
        <div style={{
          textAlign: 'justify',
          margin: '3%'
        }}>
          <p>El Skatepark 360 está participando en el programa "Presupuesto Participativo 2025". Estamos solicitando la <strong>instalación de un Domo</strong>, unete a la causa y vota por el <strong>proyecto #273 </strong> el día <strong>7 de Diciembre</strong>.
          Ubica tu casilla  y conoce los otros proyectos que participan para el <strong>distrito 1</strong>.</p>
        </div>

        <div >
          <img src='skater2.png' className='skater2'/>
        </div>
        <ProyectoParticipativoTabs/>
        
      </div>
    </div>
  );
}

export default App;
