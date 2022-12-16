import { Link } from "react-router-dom";

const ItemDetail = ({ Productos }) => {
  console.log(Productos);
  return (
    <div>
      <h2>nombre={Productos.nombre} </h2>
      <img src={Productos.img} />
      <p>descripcion={Productos.descripcion} </p>
      <p>stock={Productos.stock} </p>
    </div>
  );
};

export default ItemDetail;
