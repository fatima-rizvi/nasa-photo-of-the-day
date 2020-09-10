import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";
import Header from "./Header"
import Photo from "./Photo"
import Description from "./Description"
const BASE_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'jypoNLYG1lQ8eTIAvyzrNJIfjYawtnPyhtjtGlut'
//https://api.nasa.gov/planetary/apod?api_key=jypoNLYG1lQ8eTIAvyzrNJIfjYawtnPyhtjtGlut

const dummyData = {copyright: "Raul Villaverde Fraile", date: "2020-09-09", explanation: "Have you ever seen the Pleiades star cluster? Even if you have, you probably have never seen it as large and clear as this. Perhaps the most famous star cluster on the sky, the bright stars of the Pleiades can be seen without binoculars from even the depths of a light-polluted city.  With a long exposure from a dark location, though, the dust cloud surrounding the Pleiades star cluster becomes very evident. The featured exposure covers a sky area several times the size of the full moon.  Also known as the Seven Sisters and M45, the Pleiades lies about 400 light years away toward the constellation of the Bull (Taurus).  A common legend with a modern twist is that one of the brighter stars faded since the cluster was named, leaving only six of the sister stars visible to the unaided eye. The actual number of Pleiades stars visible, however, may be more or less than seven, depending on the darkness of the surrounding sky and the clarity of the observer's eyesight.", hdurl: "https://apod.nasa.gov/apod/image/2009/Pleiades_Fraile_3413.jpg", media_type: "image", title: "Pleiades: The Seven Sisters Star Cluster", url: "https://apod.nasa.gov/apod/image/2009/Pleiades_Fraile_960.jpg"}
// copyright: "Raul Villaverde Fraile"
// date: "2020-09-09"
// explanation: "Have you ever seen the Pleiades star cluster? Even if you have, you probably have never seen it as large and clear as this. Perhaps the most famous star cluster on the sky, the bright stars of the Pleiades can be seen without binoculars from even the depths of a light-polluted city.  With a long exposure from a dark location, though, the dust cloud surrounding the Pleiades star cluster becomes very evident. The featured exposure covers a sky area several times the size of the full moon.  Also known as the Seven Sisters and M45, the Pleiades lies about 400 light years away toward the constellation of the Bull (Taurus).  A common legend with a modern twist is that one of the brighter stars faded since the cluster was named, leaving only six of the sister stars visible to the unaided eye. The actual number of Pleiades stars visible, however, may be more or less than seven, depending on the darkness of the surrounding sky and the clarity of the observer's eyesight."   
//Teachers & Students: "Ideas for utilizing APOD in the classroom."
// hdurl: "https://apod.nasa.gov/apod/image/2009/Pleiades_Fraile_3413.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Pleiades: The Seven Sisters Star Cluster"
// url: "https://apod.nasa.gov/apod/image/2009/Pleiades_Fraile_960.jpg"


function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => { 
    //This is our"side effect" our random code we want to write
    // this will happen AFTERDOM surgery
    // axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    //   .then(res => {
    //     console.log(res)
    //     setNasaData(res.data)
    //     console.log(nasaData);
    //   })
    //   .catch(err => {
    //     console.log("ERROR");
    //   })
    setNasaData(dummyData)
  },[])

  return (
    <div className="App">
      <Header photoTitle = {nasaData.title}/>
      <Photo photoUrl = {nasaData.url} copyRight = {nasaData.copyright} date = {nasaData.date}/>
      <Description explanation = {nasaData.explanation}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
