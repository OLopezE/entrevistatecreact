import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar.jsx";
import HomeView from "./components/HomeView.jsx";
import  Table  from "./components/Table";
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <HomeView/>
    </div>
  );
}

export default App;
