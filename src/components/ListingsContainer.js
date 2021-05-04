import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, deleteItem }) {
  
  const cards = items.map(item => <ListingCard key={item.id} deleteItem={deleteItem} {...item} />)


  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;