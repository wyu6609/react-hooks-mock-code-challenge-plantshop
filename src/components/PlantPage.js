import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //set plantlist state
  const [plantList, setPlantList] = useState([]);
  //set searchInputText
  const [searchInputText, setSearchInputText] = useState("");
  const [newPlantList, setNewPlantList] = useState([]);
  //on Add new plant object
  const onAddNewObj = (newObj) => {
    setPlantList([...plantList, newObj]);
  };
  //search filter
  let updatedPlantList = plantList.filter((plantObj) => {
    if (plantObj.name.toLowerCase().includes(searchInputText.toLowerCase())) {
      return plantObj;
    } else if (searchInputText == "") {
      return plantObj;
    }
  });

  return (
    <main>
      <NewPlantForm onAddNewObj={onAddNewObj} />
      <Search setSearchInputText={setSearchInputText} />
      <PlantList setPlantList={setPlantList} updatedPlantList={updatedPlantList} plantList = {plantList}/>
    </main>
  );
}

export default PlantPage;
