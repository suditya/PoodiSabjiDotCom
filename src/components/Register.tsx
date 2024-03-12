import { useState } from "react";
import "../styles/Login.css"; // Create a new CSS file for styling
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const isValidForm = () => {
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError(() => "Please enter your email 📧");
      return false;
    }

    if (!/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError(() => "Please enter a valid email 📧");
      return false;
    }

    if ("" === password) {
      setPasswordError(() => "Please enter a password 🔒");
      return false;
    }

    if (password.length < 7) {
      setPasswordError(() => "The password must be 8 characters or longer 🔒");
      return false;
    }

    if (password !== confirmPassword) {
      setPasswordError(() => "Passwords do not match ❌");
      return false;
    }

    return true; // Return true if the form is valid
  };

  const handleRegister = async () => {
    // validate the email and the password
    console.log("register button clicked");
    const isValid = isValidForm();
    console.log(passwordError, "  errors ", emailError);
    if (!isValid) {
      if (passwordError) {
        toast.error(passwordError, {
          position: "top-center",
          // delay: 2500,
        });
      }
      if (emailError) {
        toast.error(emailError, {
          position: "top-center",
          // delay: 2500,
        });
      }
      return;
    }
    try {
      const userData = { email, password };
      const response = await axios.post(
        "http://localhost:3000/api/register",
        userData
      );
      console.log(response);
      //   toast.info(JSON.stringify(response));
      if (response.status === 200) {
        toast.success("Successfully registered 🎉", {
          position: "top-center",
          // delay: 2500,
        });
      } else {
        toast.error(
          `Not able to register due to ${error.response.data.message} ❌`,
          {
            position: "top-center",
            // delay: 2500,
          }
        );
      }
    } catch (error) {
      toast.error(
        `Not able to register due to ${error.response.data.message} ❌`,
        {
          position: "top-center",
          // delay: 2500,
        }
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="heading">REGISTER</div>
        <div className="form">
          <hr />
          <input
            type="email"
            name="email"
            id=""
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            placeholder="Enter your email 📧"
          />
          {emailError && <div className="error">{emailError}</div>}
          <input
            type="password"
            name=""
            id=""
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            placeholder="Enter your password 🔒"
          />
          <input
            type="password"
            name=""
            id=""
            onChange={(e) => setConfirmPassword(e.target.value)}
            required={true}
            placeholder="Confirm your password 🔒"
          />
          {/* {passwordError && <div className="error">{passwordError}</div>} */}
          <button className="submit-btn" onClick={() => handleRegister()}>
            Register 🚀
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
