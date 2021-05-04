import React, { useState } from "react";

function ListingCard({ 
  id, 
  description, 
  image = "https://via.placeholder.com/300x300", 
  location,
  deleteItem
 }) {
  // console.log(cards)
  const [fav, setFav] = useState(false)

  function handleFavClick() {
    setFav(fav => !fav)
  }


  // console.log(id)
  function handleDeleteCard() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    deleteItem(id)
  }

  // console.log(fav)
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {/* <button onClick={handleFavClick} className="emoji-button favorite active">{fav ? '★' : '☆'}</button> */}
        {fav ? (
          <button onClick={handleFavClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteCard} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;