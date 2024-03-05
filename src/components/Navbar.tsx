import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="left">
        <h4>poodi-sabji.com</h4>
      </div>
      <div className="right">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/signup">Signup/SignIn</a>
      </div>
    </nav>
  );
};

export default Navbar;
