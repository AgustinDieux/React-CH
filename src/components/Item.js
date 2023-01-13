const Item = (props) => {
  return (
    <div>
      <h1>{props.nombre}</h1>
      <img src={props.img} className={`imagen-${props.id}`} />
      <p>{props.descripcion}</p>
      <p>{props.stock}</p>
    </div>
  );
};

export default Item;
