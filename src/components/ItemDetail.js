import { Link } from "react-router-dom";

const ItemDetail = ({ Productos }) => {
  console.log(Productos);
  return (
    <div>
      <h1>key={Productos.id} </h1>
      <h2>nombre={Productos.nombre} </h2>
      <img img={Productos.img} />
      <p>descripcion={Productos.descripcion} </p>
      <p>stock={Productos.stock} </p>
      <Link to={`/item/${Productos.id}`}>Ir al sneaker</Link>
    </div>
  );
};

export default ItemDetail;
