import { useState, useEffect } from "react";
import "./formulaire.js"
import axios from "axios";
import "./PrivateScreen.css";
import Formulaire from "./formulaire.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <BrowserRouter>
    <Formulaire />
  </BrowserRouter>
  );
};

export default PrivateScreen;
