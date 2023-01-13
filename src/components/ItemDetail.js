import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>{data.name} </h2>
      <img src={data.imagen} />
      <p>{data.description} </p>
      <p>Precio:{data.precio}</p>
      <p>stock:{data.stock} </p>
    </div>
  );
};

export default ItemDetail;
