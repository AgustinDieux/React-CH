import firebase from "firebase/app";
import "firebase/firestore";
import React, { useState } from "react";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [orderId, setOrderId] = useState(""); // nuevo estado para guardar el ID de la orden

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailConfirmationChange = (event) => {
    setEmailConfirmation(event.target.value);
    if (email !== event.target.value) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Agregar la orden a Firestore
    firebase
      .firestore()
      .collection("orders")
      .add({
        name: name,
        lastName: lastName,
        telephone: telephone,
        email: email,
      })
      .then((docRef) => {
        setOrderId(docRef.id); // guardar el ID de la orden
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Teléfono:
        <input type="tel" value={telephone} onChange={handleTelephoneChange} />
      </label>
      <br />
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Confirmar correo electrónico:
        <input
          type="email"
          value={emailConfirmation}
          onChange={handleEmailConfirmationChange}
        />
      </label>
      <br />
      <button type="submit" disabled={!emailValid}>
        Realizar compra
      </button>
      {!emailValid && <p>Los correos electrónicos no coinciden</p>}
      {emailValid && <p>Gracias por su compra</p>}
    </form>
  );
};

export default CheckoutForm;
