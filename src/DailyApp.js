import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import "./App.css";
import Header from "./Header"
import Photo from "./Photo"
import Description from "./Description"
const BASE_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'jypoNLYG1lQ8eTIAvyzrNJIfjYawtnPyhtjtGlut'
//https://api.nasa.gov/planetary/apod?api_key=jypoNLYG1lQ8eTIAvyzrNJIfjYawtnPyhtjtGlut

// const StyledDailyApp = styled.div`
//     background-color: ${pr => pr.theme.black};
//     color: ${pr => pr.theme.white};
// `

function DailyApp() {
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
    <div className="App">
      <Header photoTitle = {nasaData.title}/>
      <Photo photoUrl = {nasaData.url} copyRight = {nasaData.copyright} date = {nasaData.date}/>
      <Description explanation = {nasaData.explanation}/>
    </div>
  );
}

export default DailyApp;
