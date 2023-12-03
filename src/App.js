import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar';
import HeroSection from './Componenets/HeroSection';
import Card from './Componenets/Card';
import Section from './Componenets/Section';
import FilterSection from './Componenets/FilterSection';

function App() {

  const ENDPOINT = `https://qtify-backend-labs.crio.do/`;

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(()=>{
    axios.get(`${ENDPOINT}albums/top`).then((res)=>setTopAlbums(res.data));
    axios.get(`${ENDPOINT}albums/new`).then((res)=>setNewAlbums(res.data));
    axios.get(`${ENDPOINT}songs`).then((res) => {
      setSongs(res.data)
      setFilteredSongs(res.data)
    });
    axios.get(`${ENDPOINT}genres`).then((res)=>setGenres([{"key": "all", "label": "All"}, ...res.data.data]));




  }, []);
  return (<>
    <Navbar />
    <HeroSection />
    <Section navId="ta" title="Top Albums" data={topAlbums}/>
    <Section navId="na" title="New Albums" data={newAlbums}/>
    <FilterSection title="Songs" data={filteredSongs} filters={genres} 
    executeFilter = {(genre)=>{
      if(genre === "All"){
        setFilteredSongs(songs);
      }
      else{
        setFilteredSongs(songs.filter((song) => song.genre.key === genre))
      }
    }}
    />

   
  </>

  );
}

export default App;
