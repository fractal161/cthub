import './App.css';
import Gallery from './Gallery.js';


function App() {
  return (
    <>
      <h1>CTHUB</h1>
      <input type="text" placeholder="Search.."></input>
      <div>
        <label for="sort">Sort by: </label>
        <select name="sort" id="sort">
          <option value="members">Members</option>
          <option value="added">Date Added</option>
        </select>
      </div>
      <p>11 results</p>
      <Gallery></Gallery>
    </>
  );
}

export default App;
