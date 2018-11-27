import React, { Component } from 'react';
import '../App.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo1 from '../image/search-solid.svg';
import Galery from '../galerycomponent/galery';
import App from '../App';

import './header.css';


const Header  = ({value='',onChange= () =>{}}) => {

    return (<div>
      <div className="container-fluid header">
        <nav className="navbar row">
         <div className="col col-lg-3 col-3 ">
         <img className="img-fluid" src={"https://seeklogo.com/images/F/fox-movies-premium-logo-BA0887F20E-seeklogo.com.png"} />
          </div>
         <div className="col col-lg-6 col-9 ">
         <ul className="list-item d-flex justify-content-around">
             <li className="link-item p-4 "><a href=""><p className="link">Home</p></a></li>
             <li  className="link-item p-4"><a href=""><p className="link">categories</p></a></li>
             <li className="link-item p-4"><a href=""><p className="link">Contact</p></a></li>
         </ul>
         </div>
         <div className=" container col-lg-3  col-sm-6 search-box d-flex">
         <div className="content d-flex justify-content-center">
         <input className="search-txt" type="text" value={value}   onChange={(event)=>{ onChange(event.target.value)}}/>
            <a className="search-btn ml-1" href="#" ><img src={logo1} style={{width:"65%",height:"65%"}}/></a>
            </div>
            <p>{value}</p>
         </div>
            </nav>
      </div>
      <div className="header-img row container-fluid bg-light">
                <p className="text-header align-middle">Welcome to the home of movies</p>
         
      </div>
      </div>
    );
  }



export default Header;
