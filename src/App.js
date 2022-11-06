import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Countries from './components/countries';
import CountryDetails from './components/countryDetails';
import Header from './components/header';


function App() {

  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prev => !prev);
  }
  // console.log(darkMode)

  const ref = useRef(true)
  useEffect(() => {
      // try {
      if (ref.current) {
          fetch();
      }
      return () => ref.current = false
      // } catch (error) {
      // throw error
      // }
      // fetch()
  });

  async function fetch() {
    axios({
      method: 'get',
      url: 'https://kontries.herokuapp.com/api/',
      // url: 'http://localhost:8080/api',
      crossDomain: true, 
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      // console.log(response)
    // setCountries(response.data)
      setCountries(response.data.countries);
    })
    .catch(err => {
      throw err;
    })
    // const response = await axios.get('https://kontries.herokuapp.com/api/')
    // const response = axios({
    //   method: 'get',
    //   url: 'https://kontries.herokuapp.com/api/',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // })
    // console.log(response)
    // // setCountries(response.data)
    // setCountries(response.data.countries)
  };
  
  return (
    <div className={`App ${darkMode ? 'darkMode' : ''}`}>
      <Header toggleMode={toggleMode} darkMode={darkMode} />
      
      <Router>
        <Routes>
          <Route path='/' element={<Countries countries={countries} setCountries={setCountries} fetch={fetch} />} />
          <Route path='/:code/details' element={<CountryDetails countries={countries} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
