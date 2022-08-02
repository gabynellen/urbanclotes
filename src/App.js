import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const [cantidad, setCantidad] = useState(0)
  const stock = 10

  const handleOnAdd = (quantity) => {

    if(cantidad < stock){
      console.log('cantidad de items agregados', quantity)
      setCantidad(cantidad + quantity)
    }
  }

  return (
    <div className="App">
      <Navbar/>
      <div className='row mt-2'>
        <div className='col-6'>
          <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
        </div>
      </div>
      <ItemListContainer greeting="Hola Tutor "/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
