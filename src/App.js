import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import "./App.css";
import Header from "./Header"
import Photo from "./Photo"
import Description from "./Description"
import NeoApp from "./NeoApp"
const BASE_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'jypoNLYG1lQ8eTIAvyzrNJIfjYawtnPyhtjtGlut'
//https://api.nasa.gov/planetary/apod?api_key=jypoNLYG1lQ8eTIAvyzrNJIfjYawtnPyhtjtGlut

const StyledApp = styled.div`
    background-color: ${pr => pr.theme.grey};
    color: ${pr => pr.theme.white};
`

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
        console.log("ERROR");
      })
    // setNasaData(dummyData)
  },[])

  return (
    <StyledApp className="App">
      <h1>NASA API's</h1>
      <Header photoTitle = {nasaData.title}/>
      <Photo photoUrl = {nasaData.url} copyRight = {nasaData.copyright} date = {nasaData.date}/>
      <Description explanation = {nasaData.explanation}/>
      <NeoApp />
    </StyledApp>
  );
}

export default App;
