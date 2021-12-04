import React, { PropTypes,rou } from 'react';
import { useHistory, useParams } from "react-router-dom";
import './impression.css';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


function Impression() {
  let { id } = useParams();
  console.log("aaaaaaaaaaa"+id)
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
                    <form method="POST"  action="/api/addPlayer" enctype="multipart/form-data">

            


               
                        <div class="input-group">
                            <img   src={"http://localhost:5000/"+id+".png"}
                           class="input--style-1" type="text" placeholder="الاسم و اللقب " name="name"  style={{width:500}} required/>
                        </div>
                  
                       
                   
                   
              


                        <div class="p-t-20">
                            <button class="btn btn--radius btn--red" type="submit">طباعة</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

 
    
  </>
  );
  
}

export default Impression;
