import React from 'react';
import GroceryCardGrid from "./components/GroceryCards.js";
import './App.css';
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <GroceryCardGrid />        
    </div>
  );
}

export default App;
