import React, {useState, useEffect} from 'react'
import { Hero, ResultCard, Footer, Navbar } from "./components";
import './App.scss';



const App = () => {

  const [hotelData, setHotelData] = useState([]);
 
  useEffect(() => {
    const axios = require('axios');
  
    const config = {
      method: 'get',
      url: 'http://localhost:3000/data.json',
      // toJSON: true,
    };
    axios(config)
    .then(function (response) {
    
      setHotelData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])


  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = hotelData.data?.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };



  return (
    <div className='app'>
      <Navbar data={hotelData} wordEntered={wordEntered} handleFilter={handleFilter} clearInput={clearInput} />
      <Hero />
      <ResultCard data={hotelData} filteredData={filteredData} wordEntered={wordEntered} />
      <Footer />

    </div>
  )
}

export default App