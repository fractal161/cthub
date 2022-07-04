import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Gallery from './Gallery.js';


function App() {
  const [sort, setSort] = useState('most');
  // empty for now because filters are hard
  // const [filters, setFilters] = useState({});
  // const [search, setSearch] = useState('');
  const serverList = useRef([]);
  // init full server list upon loading the page
  useEffect(() => {
    fetch('/api').then(res => res.json())
      .then(servers => {serverList.current = servers});
  }, []);

  useEffect(() => {
    if(sort === 'most') {
      serverList.current = serverList.current.sort((a, b) => {
        return a.members - b.members;
      });
    }
    else if (sort === 'least') {
      serverList.current = serverList.current.sort((a, b) => {
        return b.members - a.members;
      });
    }
    else {
      // error handling? what's that?
    }
  }, [sort]);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div id="filters">
        <label for="sort">Sort by: </label>
        <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
          <option value="most">Most Members</option>
          <option value="least">Least Members</option>
        </select>
      </div>
      <p>{serverList.current.length} results</p>
      <Gallery servers={serverList.current}/>
    </div>
  );
}

export default App;
