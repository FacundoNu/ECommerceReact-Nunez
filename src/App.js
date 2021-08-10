import React from 'react';
import Navbar from "./components/NavBar/Navbar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
    return (
        <div className="App">
            <Navbar />
            <ItemListConteiner
                greeting="Lista de productos"
            />
            <ItemCount
                stockInit="10"
                initial="1"
            />
        </div>
    );
}

export default App;