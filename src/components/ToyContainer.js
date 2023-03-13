import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, handleDelete, increaseLike}) {



  const renderToys = toyList.map(toy => <ToyCard increaseLike = {increaseLike} handleDelete = {handleDelete} key = {toy.name} toy = {toy} />)

  return (
    <div id="toy-collection">
      {renderToys}
    </div>
  );
}

export default ToyContainer;
