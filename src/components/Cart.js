import React, { useContext } from "react";
import { CartContext } from "./cartContext";
import CheckoutForm from "./CheckoutForm";

const Cart = () => {
  const { cart, clearCart, calculateTotal } = useContext(CartContext);
  //Aquí se agrega la función para calcular el total

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.product.id}>
            {item.product.name} ${item.product.precio} X {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <button onClick={clearCart}>Vaciar carrito</button>
      <CheckoutForm />
    </div>
  );
};

export default Cart;
