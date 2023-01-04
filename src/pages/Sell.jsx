import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sell() {
  let navigate = useNavigate();

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  function Add(e) {
    e.preventDefault();
    const body = {
      brand,
      model,
      size,
      price,
    };
    fetch(`http://localhost:3001/shoes`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    navigate("/");
  }

  return (
    <form class="form" onSubmit={Add}>
      <label htmlFor="brand">Märke</label>
      <input
        value={brand}
        id="brand"
        type="text"
        onChange={(e) => {
          setBrand(e.target.value);
        }}
      />
      <label htmlFor="Model">Modell</label>
      <input
        value={model}
        id="model"
        type="text"
        onChange={(e) => {
          setModel(e.target.value);
        }}
      />
      <label htmlFor="Size">Storlek</label>
      <input
        value={size}
        id="size"
        type="number"
        onChange={(e) => {
          setSize(e.target.value);
        }}
      />
      <label htmlFor="Price">Pris</label>
      <input
        value={price}
        id="price"
        type="number"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <button>Lägg till</button>
    </form>
  );
}

export default Sell;
