import React, { useState } from "react";
import Producto from "./Producto";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Productos = () => {
  let { id } = useParams();
  const [Productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Adidas NMD",
      descripcion: "Sneaker super comodo",
      stock: "stock: 3",
      categoria: "Sneakers",
      img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9afb8771af1748a6adfbade900997b9c_9366/zapatillas-nmd_r1.jpg",
    },
    {
      id: 2,
      nombre: "Nike Air Force 1",
      descripcion: "Sneaker super comodo",
      stock: "stock: 5",
      categoria: "Sneakers",
      img: "https://img01.ztat.net/article/spp-media-p1/b627dd7b52c846679067480bf1152b8e/4538c7a0741b4a809310ead02b26afb9.jpg?imwidth=300&filter=packshot",
    },
    {
      id: 3,
      nombre: "Nike Huarache",
      descripcion: "Sneaker super comodo",
      stock: "stock: 9",
      categoria: "Sneakers",
      img: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/gknnhy1nmwwbp7t6aeil/calzado-air-huarache-ultra-w8ToYLJb.png",
    },
  ]);
  let productoEncontrado = Productos.find((elemento) => elemento.id == id);

  return (
    <div className="row">
      {!id ? (
        Productos.map((producto) => {
          return (
            <div>
              <Producto
                key={producto.id}
                nombre={producto.nombre}
                img={producto.img}
                descripcion={producto.descripcion}
                stock={producto.stock}
              />
              <Link to={`${producto.id}`}>Ir al sneaker</Link>
            </div>
          );
        })
      ) : (
        <Producto
          key={productoEncontrado.id}
          nombre={productoEncontrado.nombre}
          img={productoEncontrado.img}
          descripcion={productoEncontrado.descripcion}
          stock={productoEncontrado.stock}
        />
      )}
    </div>
  );
};

export default Productos;
