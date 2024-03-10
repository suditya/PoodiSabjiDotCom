import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const handleLogout = () => {
    toast.success(`Successfully logged out`);
    // also delete from the local storage
    localStorage.clear();
  };
  const isLoggedIn = () => {
    console.log(localStorage.getItem("LoggedInEmail"), " logged in email");
    return localStorage.getItem("LoggedInEmail");
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
        {/* <Link to="/about-us">About Us</Link> */}
        <Link to="/checkout">Checkout</Link>
        {isLoggedIn() ? (
          <>
            {" "}
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <a onClick={handleLogout}>Logout</a>
        )}
        {/* <Link to="/login">Login</Link>
        <Link to="/register">Register</Link> */}
        {/* <Link to="/logout">Logout</Link> */}
        {/* <a onClick={handleLogout}>Logout</a> */}
        <Link to="/payment">Payment</Link>
        {/* <Link to="/login-signup">Signup/SignIn</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
