import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemCount stock={5} initial={0}/>
      <ItemListContainer greeting="Hola Tutor "/>
    </div>
  );
}

export default App;
