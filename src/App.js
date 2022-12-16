import "./App.css";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Productos from "./components/ItemList";
import Remeras from "./pages/Remeras";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="categories/:id" element={<ItemListContainer />} />
          <Route path="item/id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
