import React, { useState } from "react";

function PlantCard({ plantItem, onDelete }) {
  //set in/out stock state
  const [stock, setStock] = useState(true);
  const stockButtonHandler = () => {
    setStock(!stock);
  };
  const deleteBtnHandler = () => {
    //delete fetch
    fetch(`http://localhost:6001/plants/${plantItem.id}`, {
      method: "DELETE",
    }).then(() => onDelete(plantItem));
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
      <button className="delete" onClick={deleteBtnHandler}>
        DELETE
      </button>
    </li>
  );
}

export default PlantCard;
