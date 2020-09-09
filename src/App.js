import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";
import Header from "./Header"
import Photo from "./Photo"
import Description from "./Description"
const BASE_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'xQSx5gLJLPk9g6tY2bQKvFaCWuSBkkWLr692JA3a'


function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => { 
    //This is our"side effect" our random code we want to write
    // this will happen AFTERDOM surgery
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res)
        setNasaData(res.data)
        console.log(nasaData);
      })
      .catch(err => {
        debugger
      })
  },[])

  return (
    <div className="App">
      <Header />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
