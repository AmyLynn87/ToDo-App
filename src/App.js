import React from "react";
import List from "./components/List";
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>To Do List</h1>
    <List itemList={["Buy Milk", "Watch Netflix", "Study hard!"]} />
    <List itemList={["Play VideoGames", "Make Dinner", "Book a trip for Chicago!"]} />
    </div>
  );
}

export default App;
