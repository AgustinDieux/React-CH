import React, { useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemList = ({ Productos, id }) => {
  const filteredProducts = Productos.filter((product) => product.id === id);
  return (
    <div className="row">
      {filteredProducts.map((producto) => {
        return (
          <div>
            <Item
              key={producto.id}
              nombre={producto.nombre}
              img={producto.img}
              descripcion={producto.descripcion}
              stock={producto.stock}
            />
            <Link to={`${producto.id}`}>Ir al sneaker</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
