import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Hola Tutor"/>
    </div>
  );
}

export default App;
