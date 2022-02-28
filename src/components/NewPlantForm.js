import React, { useState } from "react";

function NewPlantForm({ onAddNewObj }) {
  //set form state
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    price: "",
  });

  //handles the inputtext
  const onChangeHandler = (event) => {
    //create new object
    const newObj = { ...newForm, [event.target.name]: event.target.value };
    setNewForm(newObj); // set form state to newly created object
  };

  //submit button handler
  const addNewObjHandler = (event) => {
    console.log(newForm);
    event.preventDefault();

    //POST REQUEST
    fetch("http://localhost:6001/plants", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddNewObj(data);
      });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={onChangeHandler}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={onChangeHandler}
        />
        <button type="submit" onClick={addNewObjHandler}>
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
