import React, { PropTypes,rou } from 'react';
import { useHistory } from "react-router-dom";
import './formulaire.css';
import { useState, useEffect,useRef } from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { height, width } from 'dom-helpers';
import './adminscreen.css';

 
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
      history.push("/")
      window.location.reload(false);
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
   
  };

  const downloadxls = async (e) => {
    e.preventDefault();
    try {   
      history.push("/downloadxls")
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
      history.push("/adminaddplayer")
      window.location.reload(false);
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
   
  };

  const Admin = async (e) => {
    e.preventDefault();
    try {   
      history.push("/Admin")
      window.location.reload(false);
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
   
  };

  const adminrecherche = async (e) => {
    e.preventDefault();
    try {   
      history.push("/adminrecherche")
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
                   <center> <h2 class="title" style={{marginTop: "-50px"}}></h2></center>
                    <form method="POST"  action="/api/adminImpression" enctype="multipart/form-data">

            


               
                     
                        <div class="row row-space">
                            <div class="col-2">
                            
                            </div>
                       
                        </div>
                      
                   
                   
                        <div class="row row-space">
                       
                        
    
  

    
                           
                        </div>
                   
                        <div class="p-t-20">
                        <button className="btn btn--radius btn--red"   type="submit" onClick={adminrecherche}>
      بحث على لاعب      </button>
                        </div>     
   
                        <div class="p-t-20">
                           <form action="api/downloadxls" method="POST">

      <button className="btn btn--radius btn--red"   type="submit">
      تحميل الملف      </button></form>
                        </div>

                        <div class="p-t-20">
                        <button className="btn btn--radius btn--red"   type="submit" onClick={addplayeradmin}>
      إضافة لاعب      </button>
                        </div>


                        <div class="p-t-20">
                        <button className="btn btn--radius btn--red"   type="submit" onClick={Admin}>
                        طباعة مجموعة من اللاعبين      </button>
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
