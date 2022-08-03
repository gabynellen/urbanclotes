import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Todos los Productos"/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estamos Filtrando "/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer />}/>
          <Route path='/category/:categoryId/detail/:id' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
