//This is for the NASA Asteroids-NeoW API
//Link: https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NeoHeader from './NeoHeader'
import NeoContent from './NeoContent'
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed'
// //For now make start and end dates constant, but figure out how to change them
const DATE = '2015-09-07'
const API_KEY = 'jypoNLYG1lQ8eTIAvyzrNJIfjYawtnPyhtjtGlut'
//(`${BASE_URL}?start_date=${START_DATE}&end_date=${START_DATE}&api_key=${API_KEY}`)

//(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=jypoNLYG1lQ8eTIAvyzrNJIfjYawtnPyhtjtGlut`)

export default function NeoApp () {
    const [astData, setAstData] = useState([])
    const [date, setDate] = useState(DATE)
    useEffect(() => {
        axios.get(`${BASE_URL}?start_date=${date}&end_date=${date}&api_key=${API_KEY}`)
          .then(res => {
              console.log(res)
              setAstData(res.data)
              console.log(astData);
          })
          .catch(err => {
              console.log("ERROR");
          })
    }, [{date}])//You'll want to change the empty array to hold the start date and end date once you figure out how to manipulate those
    return (
        <div>
            <NeoHeader date = {date} />
            <form>
                <div>
                    <label for='neoDate'>Choose a date: </label>
                    <input type="text" id="neoDate" name="name" placeholder="YYYY-MM-DD"/>
                </div>
                <div>
                    <button onClick={() => setDate(document.getElementById('neoDate'))}>Submit</button>
                </div>
            </form>
            <NeoContent allAstData = {astData} date = {date}/>
        </div>
    )
}

// // data:
//    element_count: 24
//    links: {next: "http://www.neowsapp.com/rest/v1/feed?start_date=20…d_date=2015-09-09   &detailed=false&api_key=DEMO_KEY", prev: "http://www.neowsapp.com/rest/v1/feed?start_date=20…d_date=2015-09-07&detailed=false&api_key=DEMO_KEY", self: "http://www.neowsapp.com/rest/v1/feed?start_date=20…d_date=2015-09-08&detailed=false&api_key=DEMO_KEY"}
//    near_earth_objects:
//       2015-09-07: 
//          0:
//          absolute_magnitude_h: 26.7
//          close_approach_data: [{…}]
//          estimated_diameter: {kilometers: {…}, meters: {…}, miles: {…}, feet: {…}}
//          id: "3726788"
//          is_potentially_hazardous_asteroid: false
//          is_sentry_object: false
//          links: {self: "http://www.neowsapp.com/rest/v1/neo/3726788?api_key=DEMO_KEY"}
//          name: "(2015 RG2)"
//          nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3726788"
//          neo_reference_id: "3726788"
//          __proto__: Object
