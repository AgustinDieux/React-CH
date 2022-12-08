const Remera = (props) => {
  return (
    <div>
      <h1>{props.nombre}</h1>
      <img src={props.img} />
      <p>{props.descripcion}</p>
      <p>{props.stock}</p>
    </div>
  );
};

export default Remera;
