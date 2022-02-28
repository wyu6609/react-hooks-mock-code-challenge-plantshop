import React, { useState } from "react";

function PlantCard({ plantItem }) {
  //set in/out stock state
  const [stock, setStock] = useState(true);
  const stockButtonHandler = () => {
    setStock(!stock);
  };
  return (
    <li className="card">
      <img src={plantItem.image} alt={plantItem.name} />
      <h4>{plantItem.name}</h4>
      <p>Price: {plantItem.price}</p>
      {stock ? (
        <button className="primary" onClick={stockButtonHandler}>
          In Stock
        </button>
      ) : (
        <button onClick={stockButtonHandler}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
