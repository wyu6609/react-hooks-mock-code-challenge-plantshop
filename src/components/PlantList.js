import React, { useEffect } from "react";
import PlantCard from "./PlantCard";
import { v4 as uuid } from "uuid";
function PlantList({ plantList, setPlantList }) {
  useEffect(() => {
    fetchAPI();
  }, []);
  function fetchAPI() {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((data) => setPlantList(data));
  }
  return (
    <ul className="cards">
      {plantList.map((plantItem) => {
        return <PlantCard key={uuid()} plantItem={plantItem} />;
      })}
    </ul>
  );
}

export default PlantList;
