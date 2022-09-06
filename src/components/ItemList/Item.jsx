import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { title, stock, price, pictureUrl, id } = item;
  return (
    <div className="card h-100">
      <img className="card-img-top h-100" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${stock} unidad disponible!`}</p>
        <p className="card-text"> Precio $ {`${price}`}</p>
        <Link to={`item/${id}`}>
          <button className="btn btn-primary">Ver Detalle del Producto</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;