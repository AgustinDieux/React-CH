import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";

const ItemDetailContainer = ({ greeting }) => {
  const [productos, setProductos] = useState({});
  const { id } = useParams();
  const listadoProductos = [
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
      descripcion: "Sneaker super comodo con mucho estilo",
      stock: "stock: 9",
      categoria: "Sneakers",
      img: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/gknnhy1nmwwbp7t6aeil/calzado-air-huarache-ultra-w8ToYLJb.png",
    },
  ];
  console.log("id:", id);
  /* console.log("categories:", categories); */

  // la función va a recibir por parámetro el id
  const getProductos = (id) => {
    return new Promise((resolve, reject) => {
      // y va a hacer una comparación con el método find
      const prod = listadoProductos.find((p) => p.id === parseInt(id));
      setTimeout(() => {
        listadoProductos.length > 0 ? resolve(prod) : reject("No hay datos");
      }, 500);
    });
  };

  //utilizando promise
  useEffect(() => {
    // le pasamos por parámetros el parámetro que definiste en useParams.
    getProductos(id)
      .then((res) => setProductos(res))
      .catch((err) => console.log(err));
  }, [id]);

  /* const products = id
    ? products.filter((p) => p.categoria === id)?.products
    : products;
  setItems(products); */

  /*  console.log(products); */
  return (
    <div>
      <h1>Welcome to {greeting}</h1>
      <ItemDetail Productos={productos} id={id} />
    </div>
  );
};

export default ItemDetailContainer;
