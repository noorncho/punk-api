import React, {useState, useEffect} from 'react';
import './App.scss';

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

  /****
   * Search Bar functionality
   */
  const getBeers = (searchTerm) =>{
    const searchedBeer = beerData.filter(beer => {
      return beer.name.toLowerCase().includes(searchTerm);
    });
    setBeers(searchedBeer);
  }


  /************************************************
   *      Functions for filters in Navbar
   ***********************************************/
  const filterAlcohol = (e) =>{
    if(e.target.checked){
      const filteredBeer = beerData.filter(beer => beer.abv > 6);
      setBeers(filteredBeer)
    }else{
      fetchBeers();
    }
  }

  const filterClassic = (e) =>{
    if(e.target.checked){
      const filteredBeer = beerData.filter(beer => {
        const beerYear = beer.first_brewed.split("/")[1];
        return Number(beerYear) < 2010;      
      });
      setBeers(filteredBeer);
    }else{
      fetchBeers();
    }
  }

  const filterAcidity = (e) =>{
    if(e.target.checked){
      const filteredBeer = beerData.filter(beer => beer.ph < 4);
      setBeers(filteredBeer);
    }else{
      fetchBeers();
    }
  }

  return (
    <div className="App">
      <div className="sidenav">
        <Navbar handleInput={getBeers} filterAcidity={filterAcidity} filterAlcohol={filterAlcohol} filterClassic={filterClassic} />
      </div>
      <div className="main">
        <h1 className="App__title">Brewdog's Beer Search</h1>
        <Main beerData={beers}/>
      </div>
        <div className="photo-credit">
        Photo by <a href="https://unsplash.com/@augie_ph?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">August Phlieger</a> on <a href="https://unsplash.com/s/photos/craft-beer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> 
        </div>
    </div>
  );
}

export default App;
