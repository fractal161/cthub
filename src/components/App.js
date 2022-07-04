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
  const [rawServerList, setRawServerList] = useState([]);
  const [servers, setServers] = useState([]);
  // init full server list upon loading the page
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api');
      const s = await res.json();
      setRawServerList(s);
    }
    fetchData();
  }, []);

  let addFilters = () => {
    console.log('sort: ' + sort);
    if (rawServerList.length === 0) {
      return;
    }
    let serverTmp = [...rawServerList];
    if(sort === 'most') {
      serverTmp.sort((a, b) => {
        return b.members - a.members;
      });
    }
    else if (sort === 'least') {
      serverTmp.sort((a, b) => {
        return a.members - b.members;
      });
    }
    else {
      // error handling? what's that?
    }
    console.log(serverTmp);
    setServers(serverTmp);
  };

  useEffect(addFilters, [rawServerList, sort]);

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
      <p>{servers.length} results</p>
      <Gallery servers={servers}/>
    </div>
  );
}

export default App;
