import searchIcon from "../../assets/magnifying-glass.svg";
import "./searchInput.css";

export const SearchInput = ({ onChange }) => (
  <div className="searchBox">
    <div className="row">
      <button>
        <img className="searchIcon" src={searchIcon} />
      </button>
      <input type="text" onChange={onChange} className="searchInput" />
    </div>
  </div>
);
