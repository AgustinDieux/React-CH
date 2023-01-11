import React, { useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemList = ({ data }) => {
  return (
    <div className="cards">
      {data.map((producto) => {
        return (
          <div>
            <Item
              key={producto.id}
              nombre={producto.name}
              img={producto.imagen}
              descripcion={producto.description}
              stock={producto.stock}
            />
            <Link to={`/item/${producto.id}`}>Ir al sneaker</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
