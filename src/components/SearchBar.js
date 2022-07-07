import './SearchBar.css';

function SearchBar({ value, onChange }) {
  return (
    <input
      id="search"
      type="text"
      placeholder="Search.."
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;
