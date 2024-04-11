import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo1 from "../assets/logo-grabfood.svg" 
import logo2 from "../assets/logo-grabfood-white.svg" 
function Navbar(){

    const[color,setColor]=useState(false)
    const changeBackGround=()=>{
     if(window.scrollY>=70){
      setColor(true)
     }else{
      setColor(false)
     }
    }
    window.addEventListener("scroll",changeBackGround)

    return (
        <div className={color ? "container-navbar active" : "container-navbar"}>
            <div className="headerContainer p-3 container-sm d-flex justify-content-between align-items-center">
            <div className="logo-box">
                <img 
                    className="logoApp" 
                    src= {color ? logo1:logo2} 
                    alt="" />
            </div>

            <div className="btn-group">
                <div className="btn-child btn btn-light rounded cart" >
                    <a href="#" >
                    </a>
                </div>
                <div className="btn-child btn btn-light rounded logIn">Đăng nhập/ Đăng ký</div>
                <div className="btn-child btn btn-light rounded lang">EN/</div>
            </div>
            </div>
        </div>
    )
}

export default Navbar;