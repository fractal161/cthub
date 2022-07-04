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
  const serverList = useRef(servers);

  // init full server list upon loading the page
  useEffect(() => {

  });

  useEffect(() => {
    if(sort === 'most') {
      serverList.current = servers.sort((a, b) => {
        return a.members - b.members;
      });
    }
    else if (sort === 'least') {
      serverList.current = servers.sort((a, b) => {
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
