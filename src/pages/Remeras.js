import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Remera from "./Remera";
import { Link } from "react-router-dom";

const Remeras = () => {
  let { id } = useParams();
  const [Remeras, setRemeras] = useState([
    {
      id: 4,
      nombre: "Remera Nike",
      descripcion: "Remera muy comoda",
      stock: "stock: 9",
      categoria: "Remeras",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/009/074/products/picsart_22-03-23_19-04-45-7371-feecfe12286c7cbaa616481621730674-640-0.jpg",
    },
    {
      id: 5,
      nombre: "Remera Nike",
      descripcion: "Remera muy comoda",
      stock: "stock: 9",
      categoria: "Remeras",
      img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/113/047/products/remera-nike-21-ed2c219aaa5bea102616206775722160-640-0.png",
    },
    {
      id: 6,
      nombre: "Remera Adidas",
      descripcion: "Remera muy comoda",
      stock: "stock: 9",
      categoria: "Remeras",
      img: "https://essential.vtexassets.com/arquivos/ids/477676-800-auto?v=637687112647170000&width=800&height=auto&aspect=true",
    },
  ]);
  let remeraEncontrada = Remeras.find((elemento) => elemento.id == id);

  return (
    <div className="row">
      {!id ? (
        Remeras.map((remera) => {
          return (
            <div>
              <Remera
                key={remera.id}
                nombre={remera.nombre}
                img={remera.img}
                descripcion={remera.descripcion}
                stock={remera.stock}
              />
              <Link to={`${remera.id}`}>Ir a la remera</Link>
            </div>
          );
        })
      ) : (
        <Remera
          key={remeraEncontrada.id}
          nombre={remeraEncontrada.nombre}
          img={remeraEncontrada.img}
          descripcion={remeraEncontrada.descripcion}
          stock={remeraEncontrada.stock}
        />
      )}
    </div>
  );
};

export default Remeras;
