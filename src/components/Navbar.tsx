import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { toast } from "react-toastify";
import { isLoggedIn } from "../services/users";
import { useContext } from "react";
import { CartContext } from "../context/cart";

const Navbar = () => {
  const cart = useContext(CartContext);
  const handleLogout = () => {
    toast.success(`Successfully logged out`);
    localStorage.removeItem("LoggedInEmail");
    cart.setCartItems([]); // empty array
    console.log("after logout", localStorage.getItem("LoggedInEmail"));
  };

  return (
    <nav className="navbar-container">
      <div className="left">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <h4>poodi-sabji.com</h4>
        </Link>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
        {!isLoggedIn() ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <a onClick={handleLogout}>Logout</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
