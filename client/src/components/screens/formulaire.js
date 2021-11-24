import React, { PropTypes,rou } from 'react';
import { useHistory } from "react-router-dom";
import './formulaire.css';
import { useState, useEffect } from "react";


function Formulaire() {
  const [error, setError] = useState("");
  let history=useHistory();
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {

      localStorage.removeItem("authToken");
      window.location.reload(false);
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
   
  };
  return (
    
    <div className="form-container">
      
      <button className="form-field" type="submit" onClick={logoutHandler}>
      Logout
      </button>
    <form className="register-form">

    <input
 
        id="image"
        className="form-field"
        type="text"
        placeholder="image "
        name="image"
      />
   
      <input
        id="first-name"
        className="form-field"
        type="text"
        placeholder="الاسم و اللقب "
        name="firstName"
      />

<input
        id="birthday"
        className="form-field"
        type="text"
        placeholder="تاريخ الولادة"
        name="birthday"
      />

<input
        id="club"
        className="form-field"
        type="text"
        placeholder="الجمعية/النادي"
        name="club"
      />

<input
        id="sexe"
        className="form-field"
        type="text"
        placeholder="الجنس"
        name="sexe"
      />



<input
        id="nombre_licence"
        className="form-field"
        type="text"
        placeholder="عدد الاجازة"
        name="nombre_licence"
      />

<input
        id="classe"
        className="form-field"
        type="text"
        placeholder="الصنف"
        name="classe"
      />

<input
        id="specialite"
        className="form-field"
        type="text"
        placeholder="الإختصاص"
        name="specialite"
      />

<input
        id="ligue"
        className="form-field"
        type="text"
        placeholder="الرابطة"
        name="ligue"
      />
     
      <button className="form-field" type="submit">
      imprimer le badge
      </button>
    </form>
  </div>
  
  );
}

export default Formulaire;
