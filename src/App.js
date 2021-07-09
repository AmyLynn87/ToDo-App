import React from "react";
import List from "./components/List";
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>To Do List</h1>
    <List itemList={["Buy Milk", "Watch Netflix", "Study hard!"]} />
    </div>
  );
}

export default App;
