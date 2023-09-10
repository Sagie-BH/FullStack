import React, { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";

const rewriteWithCapitalizeFirstLetter = (string) => {
  const arr = string.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

const LoginInput = ({name, type, handleFormChange}) => {
  return (
    <div className={styles.inputGroup}>
      <label>{rewriteWithCapitalizeFirstLetter(name)}</label>
      <input
        name={name}
        type={type}
        onChange={handleFormChange}
        required
        className={styles.input}
      />
    </div>
  );
};

const Login = () => {
  const [form, setForm] = useState({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
  });

  const { login, register } = useAuth();
  const history = useNavigate();

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginObj = {
      password: form.password,
      email: form.email,
    }
    try {
      const response = await login(loginObj);

      if(response.userId) {
        history.push("/recipes");
      } else {
        setError("Invalid details");
      }
      
    } catch (err) {
      setError("Register Failed. Please try again");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const loginObj = {
        userName: form.userName,
        password: form.password,
        email: form.email,
      }
      const response = await register(loginObj);

      if(response.userId) {
        history.push("/recipes");
      } else {
        setError("Invalid details");
      }
      
    } catch (err) {
      setError("Register Failed. Please try again");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      {error && <div className={styles.error}>{error}</div>}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <label>
          <input
            type="radio"
            value="login"
            checked={!isRegistering}
            onChange={() => setIsRegistering(false)}
          />
          Login
        </label>
        <label>
          <input
            type="radio"
            value="register"
            checked={isRegistering}
            onChange={() => setIsRegistering(true)}
          />
          Register
        </label>
      </div>

      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <LoginInput name='email' type='text' handleFormChange={handleFormChange}/>
        {/* <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            name="email"
            type="text"
            onChange={handleFormChange}
            required
            className={styles.input}
          />
        </div> */}
        {isRegistering && (
          <div className={styles.inputGroup}>
            <label>User name</label>
            <input
              name="userName"
              type="text"
              onChange={handleFormChange}
              required
              className={styles.input}
            />
          </div>
        )}
        <LoginInput name='password' type='password' handleFormChange={handleFormChange}/>

        {/* <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={handleFormChange}
            required
            className={styles.input}
          />
        </div> */}
        {isRegistering && (
          <div className={styles.inputGroup}>
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              onChange={handleFormChange}
              className={styles.input}
            />
          </div>
        )}
        <button className={styles.button} type="submit">
          {isRegistering ? "Register" : "Login "}
        </button>
      </form>
    </div>
  );
};

export default Login;
