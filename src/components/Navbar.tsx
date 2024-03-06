import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="left">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <h4>poodi-sabji.com</h4>
        </Link>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        {/* <Link to="/about-us">About Us</Link> */}
        <Link to="/checkout">Checkout</Link>
        {/* <Link to="/login-signup">Signup/SignIn</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
