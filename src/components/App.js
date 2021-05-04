import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
// import ListingCard from "./ListingCard"

function App() {
  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(data => setItems(data))
  }, [])

    const newItems = items.filter(item => {
      return item.description.toLowerCase().includes(searchTerm.toLowerCase())
    })

  const deleteItem = (cardId) => {
    console.log("DELETE", cardId)
    const lessItems = items.filter(item => item.id !== cardId)
    setItems(lessItems)
  }

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <ListingsContainer items={newItems} deleteItem={deleteItem} />
    </div>
  );
}

export default App;