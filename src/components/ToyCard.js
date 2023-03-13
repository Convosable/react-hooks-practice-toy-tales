import React from "react";

function ToyCard({toy, handleDelete, increaseLike}) {

  const {name, image, likes} = toy


  function handleDonate() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => handleDelete(toy))
  }

  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({likes: likes + 1})
    })
  .then (r => r.json())
  .then ((updatedToy) => increaseLike(updatedToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick = {handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick = {handleDonate} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
