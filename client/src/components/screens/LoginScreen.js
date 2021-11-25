import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-screen">
      
      <form onSubmit={loginHandler} className="login-screen__form">
    <center>  <div class="card-heading"></div></center>
        <h3 className="login-screen__title">تسجيل الدخول</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group" style={{direction: "rtl"}}>
          <label htmlFor="email" >البريد الإلكتروني</label>
          <input
            type="email"
            required
            id="email"
            placeholder="البريد الإلكتروني"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className="form-group" style={{direction: "rtl"}}>
          <label htmlFor="password">
          كلمة السر:{" "}
            <Link to="/forgotpassword" className="login-screen__forgotpassword">
            هل نسيت كلمة السر؟
            </Link>
          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="كلمة السر"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type="submit" className="btn btn-primary ">
        تسجيل الدخول
 
        </button>

        <span className="login-screen__subtext" style={{direction: "rtl"}}>
        ليس لديك حساب؟ <Link to="/register">
          إنشاء حساب لك  
        </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginScreen;
