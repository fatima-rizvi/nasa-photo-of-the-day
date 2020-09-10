//This is for the NASA Asteroids-NeoW API
//Link: https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NeoHeader from './NeoHeader'
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed'
// //For now make start and end dates constant, but figure out how to change them
const START_DATE = '2015-09-07'
const END_DATE = '2015-09-08'
const API_KEY = 'DEMO_KEY'
//(`${BASE_URL}?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`)

export default function NeoApp () {
    const [astData, setAstData] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`)
          .then(res => {
              console.log(res)
              setAstData(res.data)
              console.log(astData);
          })
          .catch(err => {
              console.log("ERROR");
          })
    }, [])//You'll want to change the empty array to hold the start date and end date once you figure out how to manipulate those
    return (
        <div>
            <h3>Hi, this will be the location of the NeoApp component</h3>
            <NeoHeader />
        </div>
    )
}
