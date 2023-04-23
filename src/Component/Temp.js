import React, { useEffect, useState } from 'react';
import "./Style.css";
import Weathercard from './weathercard';

const Temp = () => {
    const [searchValue,setSearchValue] = useState("Bikaner");
    const [tempInfo,setTempInfo] = useState("");
    const getWeaterInfo = async() => {
        try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ec5c292e4edbd503057985246da097b5`;
        const res = await fetch(url);
        const data = await res.json();
        const {temp,humidity,pressure} = data.main;
        const {main:weathermood} = data.weather[0];
        const {name} = data;
        const {speed} = data.wind;
        const {country,sunset} = data.sys;

        const myNewWeather = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset,
        };
        setTempInfo(myNewWeather);
        }catch(error){
        console.log(error);
        }
    };
    useEffect(()=>{
        getWeaterInfo();
    },[]);
  return (
    <>
    <div className='wrap'>
        <div className='search'>
        <input type='search'
        placeholder='search...'
        autoFocus
        id='search'
        className='searchTerm'
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
        />
        <button className='searchButton' 
        type='button' 
        onClick={getWeaterInfo}>
            search
        </button>

        </div>
    </div>
      {/* Our Term Card */}
      <Weathercard tempInfo = {tempInfo}/>
        </>
  )
}

export default Temp