import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useState } from 'react';

function App() {

  const [cantidad, setQuantity] = useState(0)
  const stock = 5

  const handleOnAdd = (quantity) => {
    
    if(cantidad < stock){
      console.log('cantidad de items agregados', quantity)
      setQuantity(cantidad + quantity)
    }
  }

  return (
    <div className="App">
      <Navbar/>
      <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
      <ItemListContainer greeting="Hola Tutor "/>
    </div>
  );
}

export default App;
