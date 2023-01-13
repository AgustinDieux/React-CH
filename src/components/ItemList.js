import React, { useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./cartContext";

const ItemList = ({ data }) => {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <div className="cards">
      {data.map((producto) => {
        return (
          <div>
            <Item
              key={producto.id}
              nombre={producto.nombre}
              img={producto.imagen}
              descripcion={producto.description}
              stock={producto.stock}
            />
            <button onClick={() => addToCart(producto)}>
              Añadir al carrito
            </button>
            <Link to={`/item/${producto.id}`}>
              <button className="botonvm">Ver mas</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
