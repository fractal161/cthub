import './App.css';
import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Gallery from './Gallery.js';

function App() {
  const [sort, setSort] = useState('most');
  // empty for now because filters are hard
  // const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const [rawServerList, setRawServerList] = useState([]);
  const [servers, setServers] = useState([]);
  // init full server list upon loading the page
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api');
      const s = await res.json();
      setRawServerList(s);
    };
    fetchData();
  }, []);

  let handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (rawServerList.length === 0) {
      return;
    }
    let serverTmp = [...rawServerList];
    if (search !== '') {
      const options = {
        includeScore: true,
        shouldSort: false,
        threshold: 0.3,
        keys: ['name'],
      };
      const fuse = new Fuse(serverTmp, options);
      const result = fuse.search(search);
      serverTmp = result.map((x) => x.item);
    }
    if (sort === 'most') {
      serverTmp.sort((a, b) => {
        return b.members - a.members;
      });
    } else if (sort === 'least') {
      serverTmp.sort((a, b) => {
        return a.members - b.members;
      });
    } else {
      // error handling? what's that?
    }
    setServers(serverTmp);
  }, [rawServerList, sort, search]);

  return (
    <div className="App">
      <Header />
      <SearchBar value={search} onChange={handleSearchChange} />
      <div id="filters">
        <label for="sort">Sort by: </label>
        <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
          <option value="most">Most Members</option>
          <option value="least">Least Members</option>
        </select>
      </div>
      <p>{servers.length} results</p>
      <Gallery servers={servers} />
    </div>
  );
}

export default App;
