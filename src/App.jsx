import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;