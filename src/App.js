import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setAllCountries(response.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="App">
      <Navbar />
      <CountriesList allCountries={allCountries} />

      <Routes>
        <Route path="/country-details/:country" element={<CountryDetails allCountries={allCountries} />} />
      </Routes>
    </div>
  );
}

export default App;
