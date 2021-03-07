import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {Col} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {signOut} from "../../redux/actions";
// import showNavbar from '../../utils/nav'

const Sidebar = () => {
    const dispatch = useDispatch();

    const showNavbar = () =>{
        const toggle = document.getElementById('header-toggle');
        const nav = document.getElementById('nav-bar');
        const bodypd = document.getElementById('body-pd');
        const headerpd = document.getElementById('header')
        nav.className.toggle('show')
        toggle.className.toggle('bx-x')
        bodypd.className.toggle('body-pd')
        headerpd.className.toggle('body-pd')
    }

    return (
        <>
           <div className="body-pd">
               <header className="header" id="header">
                   <div className="header__toggle"  onClick={()=> {
                       showNavbar()
                   }}>
                       <i className='bx bx-menu' id="header-toggle"/>
                   </div>

                   <div className="header__img">
                       <img src="assets/img/perfil.jpg" alt=""/>
                   </div>
               </header>

               <div className="l-navbar" id="nav-bar">
                   <nav className="nav">
                       <div>
                           <a href="#" className="nav__logo">
                               <i className='bx bx-layer nav__logo-icon'></i>
                               <span className="nav__logo-name">Bedimcode</span>
                           </a>

                           <div className="nav__list">
                               <a href="#" className="nav__link active">
                                   <i className='bx bx-grid-alt nav__icon'></i>
                                   <span className="nav__name">Dashboard</span>
                               </a>

                               <a href="#" className="nav__link">
                                   <i className='bx bx-user nav__icon'></i>
                                   <span className="nav__name">Users</span>
                               </a>

                               <a href="#" className="nav__link">
                                   <i className='bx bx-message-square-detail nav__icon'></i>
                                   <span className="nav__name">Messages</span>
                               </a>

                               <a href="#" className="nav__link">
                                   <i className='bx bx-bookmark nav__icon'></i>
                                   <span className="nav__name">Favorites</span>
                               </a>

                               <a href="#" className="nav__link">
                                   <i className='bx bx-folder nav__icon'></i>
                                   <span className="nav__name">Data</span>
                               </a>

                               <a href="#" className="nav__link">
                                   <i className='bx bx-bar-chart-alt-2 nav__icon'></i>
                                   <span className="nav__name">Analytics</span>
                               </a>
                           </div>
                       </div>

                       <a href="#" className="nav__link">
                           <i className='bx bx-log-out nav__icon'></i>
                           <span className="nav__name">Log Out</span>
                       </a>
                   </nav>
               </div>

           </div>
        </>
    );
};

export default Sidebar;
