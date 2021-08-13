import React from 'react';
import Navbar from "./components/NavBar/Navbar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import './App.css';


function App() {
    return (
        <div className="App">
            <Navbar />
            <ItemListConteiner />
        </div>
    );
}

export default App;