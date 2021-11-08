import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

// components
import SearchBar from "../searchBar/SearchBar";

// styles
import "./NavBar.css";

export default function NavBar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking App</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
