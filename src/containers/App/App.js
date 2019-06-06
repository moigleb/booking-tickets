import React from 'react'
import './App.css';
import SeatsContainer from "../../containers/Seats";
import CartContainer from "../../containers/Cart";


export default function App() {
  return (
    <div className="App">
      <h1>SeatsMap</h1>
      <SeatsContainer />
      <CartContainer />
    </div>
  );
};
