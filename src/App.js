import './App.css';
import NavBar from './components/navbar';
import  ItemListContainer from './components/ItemListContainer';

function App(){
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='SneakerShop'/>
    </div>
  )
}

export default App;



