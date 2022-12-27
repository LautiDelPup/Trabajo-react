import './App.css';
import Card from "./components/Card"
import Button from './components/Button/Button';
import NavBar from './components/NavBar/NavBar';
import Flex from './components/Flex/Flex';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const producto = {
    precio: 500,
    nombre: "Pijama",
    descripcion: "pijama corto dos piezas",
  };

  const cardProduct = (
    <div>
      <h3>{producto.nombre}</h3>
      <br />
      <h3>$ {producto.precio}</h3>
      <h3>{producto.descripcion}</h3>
    </div>
  );

  function hacerAlgo() {
    alert("Gracias por elegirnos");
  }

  const miEstilo = {
    backgroundColor: "#445c83",
    margin: "30px",
    padding: "50px",
    textAlign: "center",
  };

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Te damos la bienvenida a nuestra tienda"/>
      <Flex>
        <Card
          img="imgs/remera.jpg"
          title="Remeron"
          price={5000}
          detail="Remeron de algodón"
          />

        <Card
        img="imgs/pantalonLargo.jpg" 
        title="Pants animados" 
        price={4500} 
        detail="Pants estampados"
        />

        <Card
        img="imgs/pantalonCorto.jpg" 
        title="Pijama corto" 
        price={3000} 
        detail="Pantalon corto + remera"
        />
        </Flex>

      <button onClick={hacerAlgo}>Comprar</button>
      </div>
  );
}

export default App;

