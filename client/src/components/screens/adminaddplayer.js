import React, { PropTypes,rou } from 'react';
import { useHistory } from "react-router-dom";
import './formulaire.css';
import { useState, useEffect,useRef } from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { height, width } from 'dom-helpers';

 
function Formulaire() {
    
    const [url, setUrl] = useState("");
    const inputEl = useRef(null);
    function handleChange(event) {
        var file = inputEl.current.files[0];
        console.log(file.name)
        var reader = new FileReader();
        reader.onload = function(event) {
            setUrl(event.target.result)
          };
        
        reader.readAsDataURL(file);
        
         
     
        
      }
  
      
  
  const [error, setError] = useState("");
  let history=useHistory();
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {

      localStorage.removeItem("authToken");
      history.push("/");
      window.location.reload(false);
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
   
  };

  
  const addplayeradmin = async (e) => {
    e.preventDefault();
    try {   
      history.push("/admin")
      window.location.reload(false);
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
   
  };
  
  return (
    <>
         
  
   <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
              <button className="btn btn--radius btn--logout" type="submit" onClick={logoutHandler}>
              تسجيل خروج
      </button>
      
        <div class="wrapper wrapper--w680">
            <div class="card card-1">
                <div class="card-heading"></div>
                <div class="card-body">
                   <center> <h2 class="title" style={{marginTop: "-50px"}}>تسجيل معلومات اللاعب</h2></center>
                    <form method="POST"  action="/api/addPlayer" enctype="multipart/form-data">

            


               
                        <div class="input-group">
                            <input class="input--style-1" type="text" placeholder="الاسم و اللقب " name="name" required/>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-1 js-datepicker" type="date" placeholder="BIRTHDATE" name="birthday" required/>
                                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <div class="rs-select2 js-select-simple select--no-search">
                                        <select name="gender" class="input--style-2" style={{width: "220px", marginTop: "15px"}}>
                                            <option disabled="disabled" selected="selected">الجنس</option>
                                            <option value="ذكر">ذكر</option>
                                            <option value="أنثى">أنثى</option>
                                     
                                        </select>
                                        <div class="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <div class="input-group">
                            <input class="input--style-1" type="text" placeholder=" الجمعية/النادي  " name="equipe" required/>
                        </div>
                   
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-1" type="text" placeholder="عدد الاجازة " name="lic" required/>
                                </div>
                            </div> 
                              <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-1" type="text" placeholder="الصنف" name="classe" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-1" type="text" placeholder="الإختصاص " name="specialite" required/>
                                </div>
                            </div> 
                              <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-1" type="text" placeholder="الرابطة" name="division" required/>
                                </div>
                                </div>
                                <div class="col-2">
                              
                              <center>  <img src={url} class="img-thumbnail" alt=""  style={{width:500}}/></center>

                            </div>
                            
                        </div>
                        <br/><br/>         
           <center>  <label id="largeFile" for="file" >
    <input type="file" id="file" name="file" accept="image/*"   ref={inputEl} onChange={handleChange}        
/>

</label></center>

<br/><br/>


                        <div class="p-t-20">
                            <button class="btn btn--radius btn--red" type="submit">تسجيل</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

 
    
  </>
  );
  
}

export default Formulaire;
