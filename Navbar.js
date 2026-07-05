import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#007bff", padding: "10px" }}>
      <Link to="/" style={{ color: "white", margin: "15px" }}>Home</Link>
      <Link to="/settings" style={{ color: "white", margin: "15px" }}>Settings</Link>
      <Link to="/about" style={{ color: "white", margin: "15px" }}>About</Link>
      <Link to="/help" style={{ color: "white", margin: "15px" }}>Help</Link>
    </nav>
  );
}

export default Navbar;