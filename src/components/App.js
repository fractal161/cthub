import './App.css';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Gallery from './Gallery.js';


function App() {
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
      <Gallery />
    </div>
  );
}

export default App;
