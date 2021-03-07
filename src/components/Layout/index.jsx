import React, {useState} from 'react'
import Header from '../Header/index'
import './Sidebar.css'
import {Link, NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signOut} from "../../redux/actions";
import $ from 'jquery'
// import Calendar from "../UI/Calendar";
import 'react-calendar/dist/Calendar.css';
import Toggle from "../Theme/Toggler";
import TogglerButton from "../Theme/TogglerButton";
// import showNavbar from "../../utils/nav";

const Layout = (props) => {

    const [navValue, setNavValue] = useState(false);
    const dispatch = useDispatch();
    const user = JSON.parse(window.localStorage.getItem("user"))
    const theme = window.localStorage.getItem('theme')
    const toggleClick = (e) => {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    }



    return (
        <div>
            <Header/>
            {
                props.sidebar ? (<>
                    <div className={`bodyClass ${navValue?'body-pd':''}`} id="body-pd">
                        <header className={`header dark:text-black ${navValue?'body-pd':''}`} id="header">
                            <div className="header__toggle" onClick={()=> {
                                setNavValue(!navValue)
                            }}>
                                <i className={`bx bx-menu ${navValue?'bx-x':''}`} id="header-toggle"/>
                            </div>

                            <div className="header__img">
                                <img src="assets/img/perfil.jpg" alt=""/>
                            </div>
                            <div>
                                <h1>Hi, <b>{user.firstName}</b></h1>

                            </div>
                            {/*<div>*/}
                            {/*    <TogglerButton />*/}
                            {/*</div>*/}

                        </header>

                        <div className=
                                 {`l-navbar ${navValue?'show':''}`} id="nav-bar">
                            <nav className="nav">
                                <div>
                                    <a href="/home" className="nav__logo">
                                        <i className='bx bx-layer nav__logo-icon'/>
                                        <span className="nav__logo-name">E-Commerce</span>
                                    </a>

                                    <div className="nav__list">

                                        <NavLink to="/home" className="nav__link">
                                            <i className='bx bx-grid-alt nav__icon'/>
                                            <span className="nav__name">Dashboard</span>
                                        </NavLink>

                                        <NavLink to="/category" className="nav__link">
                                            <i className='bx bx-grid-alt nav__icon'/>
                                            <span className="nav__name">Category</span>
                                        </NavLink>

                                        <NavLink to='/orders' className="nav__link">
                                            <i className='bx bx-user nav__icon'/>
                                            <span className="nav__name">Orders</span>
                                        </NavLink>

                                        <NavLink to="/products" className="nav__link">
                                            <i className='bx bx-message-square-detail nav__icon'/>
                                            <span className="nav__name">Products</span>
                                        </NavLink>
                                    </div>
                                </div>

                                <a href="#" className="nav__link"  onClick={()=>{
                                    dispatch(signOut())
                                }}>
                                    <i className='bx bx-log-out nav__icon'/>
                                    <span className="nav__name">Log Out</span>
                                </a>

                            </nav>
                        </div>
                        <div className={"p-3"}>
                            {props.children}
                        </div>
                    </div>

                </>) : props.children
            }

        </div>
    )
}

export default Layout
