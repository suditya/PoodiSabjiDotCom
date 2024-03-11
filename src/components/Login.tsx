import { useContext, useState } from "react";
import "../styles/Login.css";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_DEV_URL } from "../utility/common";
import { CartContext } from "../context/cart";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  //   console.log(email, " ", password);
  const cart = useContext(CartContext);

  const navigate = useNavigate();

  const isValidForm = () => {
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError(() => "Please enter your email");
      return false;
    }

    if (!/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError(() => "Please enter a valid email");
      return false;
    }

    if ("" === password) {
      setPasswordError(() => "Please enter a password");
      return false;
    }

    if (password.length < 7) {
      setPasswordError(() => "The password must be 8 characters or longer");
      return false;
    }

    return true; // Return true if the form is valid
  };

  const handleSubmit = async () => {
    // validate the email and the password
    console.log("submit button clicked");
    const isValid = isValidForm();
    console.log(passwordError, "  errros ", emailError);
    if (!isValid) {
      if (passwordError) {
        toast.error(passwordError);
      }
      if (emailError) {
        toast.error(emailError);
      }
      return;
    }
    try {
      const userData = {
        email,
        password,
      };
      const response = await axios.post(BACKEND_DEV_URL + "/login", userData);
      console.log(response);
      //   toast.info(JSON.stringify(response));
      if (response.status === 200) {
        toast.success("Successfully LoggedIn ");
        localStorage.setItem("LoggedInEmail", email);
        const response = await axios.get(BACKEND_DEV_URL + "/get-cart", {
          params: { email: email },
        });
        console.log(response, " from the backend after login");
        cart.setCartItems(response.data.cartItems);
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error(`Could not login due to: ${response.data.message}`);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
    // toast.success("Succesfully Logged In!");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {/* {toast("hello world!")} */}
        <div className="heading">LOGIN</div>
        <div className="form">
          <hr />
          {/* <label htmlFor="email">Email 📧:</label> */}
          <input
            type="email"
            name="email"
            id=""
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            placeholder="Enter your email 📧:"
          />
          {/* <label htmlFor="error">{emailError}</label> */}
          {/* <label htmlFor="password">Password 🔒:</label> */}
          <input
            type="password"
            name=""
            id=""
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            placeholder="Enter your password 🔒"
          />
          {/* <label htmlFor="error">{passwordError}</label> */}
          <button className="submit-btn" onClick={() => handleSubmit()}>
            Submit 🚀
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
