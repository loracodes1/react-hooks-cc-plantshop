import React, { useState } from "react";
import config from "../config/index.js";

function PlantCard({ plant, onClickDelete }) {
  const [inStock, setInStock] = useState("true");

  const handleStockToggle = () => {
    setInStock((prevInStock) => !prevInStock);
  };

  const handleClickDelete = () => {
    fetch(`${config.BASE_URL}/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onClickDelete(plant.id));
  };
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className={inStock ? "primary" : ""} onClick={handleStockToggle}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button
        className="primary"
        style={{ marginLeft: "40px" }}
        onClick={handleClickDelete}
      >
        Delete Plant
      </button>
    </li>
  );
}

export default PlantCard;
