import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
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
    <div className="register-screen">
      <form onSubmit={registerHandler} className="register-screen__form">
      <center>  <div class="card-heading"></div></center>
        <h3 className="register-screen__title">تسجيل</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group" style={{direction: "rtl"}}>
          <label htmlFor="name">اسم المستخدم:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="ادخل اسم المستخدم"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group" style={{direction: "rtl"}}>
          <label htmlFor="email">بريد الالكتروني :</label>
          <input
            type="email"
            required
            id="email"
            placeholder="بريد الالكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group" style={{direction: "rtl"}}>
          <label htmlFor="password">كلمه السر :</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="كلمه السر"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group" style={{direction: "rtl"}}>
          <label htmlFor="confirmpassword">تأكيد كلمة المرور :</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="تأكيد كلمة المرور"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
        تسجيل
        </button>

        <span className="register-screen__subtext" style={{direction: "rtl"}}>
        هل لديك حساب؟ <Link to="/login">تسجيل الدخول</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;
