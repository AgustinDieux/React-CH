import "./App.css";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./components/Productos";
import Remeras from "./pages/Remeras";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/sneakers" element={<Productos />} />
          <Route path="/sneakers/:id" element={<Productos />} />
          <Route path="/Remeras" element={<Remeras />} />
          <Route path="/Remeras/:id" element={<Remeras />} />
        </Routes>
      </BrowserRouter>
      <ItemListContainer greeting="SneakerShop" />
    </div>
  );
}

export default App;
