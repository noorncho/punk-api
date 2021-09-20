import React, {useState, useEffect} from 'react';
import './App.css';

import Navbar from './components/NavBar/Navbar';
import Main from './components/Main/Main';

import beerData from './data/beers';

function App() {
  const [beers, setBeers] = useState([]);  
  
  /*
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (e) =>{
    e.preventDefault()
    const input = e.target.value.toLowerCase();
    setSearchTerm(input);
  }
  */
  const fetchBeers = () =>{
    fetch("https://api.punkapi.com/v2/beers")
      .then(response => response.json())
      .then(jsonResponse => setBeers(jsonResponse))
      .catch(err => console.log("error"))
  };
  useEffect(() => {
    fetchBeers();
  }, [])

  const getBeers = (searchTerm) =>{
    const searchedBeer = beerData.filter(beer => {
      return beer.name.toLowerCase().includes(searchTerm);
    });
    setBeers(searchedBeer);
  }


  const filterAlcohol = (e) =>{
    if(e.target.checked){
      const filteredBeer = beerData.filter(beer => beer.abv > 6);
      setBeers(filteredBeer)
    }
  }

  const filterClassic = (e) =>{
    if(e.target.checked){
      const filteredBeer = beerData.filter(beer => {
        const beerYear = beer.first_brewed.split("/")[1];
        return Number(beerYear) < 2010;      
      });
      setBeers(filteredBeer);
    }
  }

  const filterAcidity = (e) =>{
    if(e.target.checked){
      const filteredBeer = beerData.filter(beer => beer.ph < 4);
      setBeers(filteredBeer);
    }
  }

  return (
    <div className="App">
      <div className="sidenav">
        <Navbar handleInput={getBeers} filterAcidity={filterAcidity} filterAlcohol={filterAlcohol} filterClassic={filterClassic} />
      </div>
      <Main beerData={beers}/>
    </div>
  );
}

export default App;
