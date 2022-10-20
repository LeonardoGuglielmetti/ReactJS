import React, { useContext, useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { GContext } from "../Cart/CartContext";

const Cart = () => { 
  const [buyer, setBuyer] = useState({name: '', email: '', phone: ''})
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, sendOrder, removeItem } = useContext(GContext);
  
  const handleSubmit = (e) => {
  e.preventDefault();
  if(buyer.name === '' || buyer.email === '' || buyer.phone === '' ) {
    alert('Informacion vacia')
  } else {
    sendOrder(totalPrice, buyer);
  }
};


  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    let total = 0;
    cartItems.forEach(({ item, quantity }) => {
      total += parseInt(item.price) * quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);
  return (
    <>
      {
        !cartItems.length
          ? < div className="emptyContainer">
            <p>No hay productos en el carrito</p>
            <button>
              <Link to={"/"}>
              Ir al home
              </Link>
               </button>
          </div> 
          :(<div> <ul>
          {cartItems.map(({ item, quantity }) => (
            <>
              <div key={item.id} className="card" style={{ width: "20rem" }}>
                <img
                  className="card-img-top"
                  src={item.pictureUrl}
                  alt="Card cap"
                />
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{`${item.stock} disponibles!`}</p>
                  <p className="card-text">{`Total $${item.price * quantity
                    } | `}</p>
                </div>
                <button onClick={()=>removeItem(item.id)}>Eliminar</button>
              </div>
            </>
          ))}
        </ul>
        {/* <h1 className="bg-primary">{`Your total is: $${totalPrice}`}</h1> */}
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Carrito</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Su Total a Pagar es</Card.Subtitle>
            <Card.Text>
              ${totalPrice}
            </Card.Text>
            <Card.Link href="#">Completar Orden y Enviar</Card.Link>
  
          </Card.Body>
        </Card>
        <form onSubmit={handleSubmit}>
          <div className="row g-2">
            <div className="col-md-8">
              <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
              <input type="text" name='name' onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Mike Johnson" />
            </div>
            <div className="col-md-8">
              <label htmlFor="inputEmail4" className="form-label ">Email</label>
              <input type="email" name='email' onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="col-md-8">
              <label htmlFor="inputCity" className="form-label">Telephone number</label>
              <input type="tel" name='phone' onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="115869210" />
            </div>
          </div>
          <button type="submit" className="btn btn-info m-3">
            Send order
          </button>
        </form>
        </div>)
    }
    </>
  );
};

export default Cart;