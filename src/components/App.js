import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])


  useEffect (() => {
    fetch(`http://localhost:3001/toys`)
    .then(r => r.json())
    .then(toy => setToyList(toy))
  },[])

  function handleAddToy(newToy) {
    setToyList([...toyList, newToy]);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDelete(toy) {
    const deletedToy = toyList.filter(t => t.id !== toy.id);
    setToyList(deletedToy)
  }

  function increaseLike(toy) {
    const newLike = toyList.map(t => t.id === toy.id ? toy : t)
    setToyList(newLike)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy = {handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer increaseLike = {increaseLike} handleDelete = {handleDelete} toyList = {toyList}/>
    </>
  );
}

export default App;


// App
      // Header
      // Toy Form
      // Toy Container
                      // Toy Card