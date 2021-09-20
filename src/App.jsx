import React, {useState, useEffect} from 'react';
import './App.css';

import Navbar from './components/NavBar/Navbar';
import Main from './components/Main/Main';

import beerData from './data/beers';

function App() {
  const [beers, setBeers] = useState([]);
  
  
  /*
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput =(e) =>{
    const cleanInput = e.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }
  */

  const getBeers = (searchTerm) =>{
    const searchedBeer = beerData.filter(beer => {
      return beer.name.toLowerCase().includes(searchTerm);
    });
    setBeers(searchedBeer);
  }

  useEffect(() => {
    getBeers(beers);
  }, [])

  return (
    <div className="App">
      <div className="sidenav">
        <Navbar handleInput={getBeers} />
      </div>
      <Main beerData={beers}/>
    </div>
  );
}

export default App;
