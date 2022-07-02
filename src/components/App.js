import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Gallery from './Gallery.js';
import servers from './servers.json'


function App() {
  // for now, 0 represents members, 1 represents date added
  const [sort, setSort] = useState(0);
  // empty for now because filters are hard
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div id="filters">
        <label for="sort">Sort by: </label>
        <select name="sort" id="sort">
          <option value="members">Members</option>
          <option value="added">Date Added</option>
        </select>
      </div>
      <Gallery servers={servers}/>
    </div>
  );
}

export default App;
