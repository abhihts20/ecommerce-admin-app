import React from 'react'
import Header from '../Header/index'
import './Sidebar.css'
import {Card, Col, Row} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signOut} from "../../redux/actions";
import $ from 'jquery'
// import Calendar from "../UI/Calendar";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import TogglerButton from "../Theme/TogglerButton";

const Layout = (props) => {

    // useEffect(() =>{
    //     $("#menu-toggle").click(function(e) {
    //
    //     });
    // })
    const dispatch = useDispatch();
    const user = JSON.parse(window.localStorage.getItem("user"))
    const theme = window.localStorage.getItem('theme')
    const toggleClick = (e) => {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    }
    const getTime = () => {
        const time = new Date();
        const hrs = time.getHours();
        let sal = '';
        if (hrs < 12) {
            sal = "Good Morning"
        } else if (hrs < 18) {
            sal = "Good Afternoon"
        } else {
            sal = "Good Evening"
        }
        return sal;
    }

    const getDateTime = () => {
        const d = new Date();
        return `${day[d.getDay()]}, ${d.getDate()} ${month[d.getMonth() + 1]} ${d.getFullYear()}`
    }
    const month = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }
    const day = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }


    return (
        <div>
            <Header/>
            {
                props.sidebar ? (<>
                    <div className="d-flex" id="wrapper">
                        <div className="border-right" id="sidebar-wrapper">
                            <div>
                                {/*<div className="card-body">*/}
                                {/*    <img className="text-center" src="https://img.icons8.com/color/96/000000/user-male-circle--v2.png"/>*/}
                                {/*    <div>{user.firstName}</div>*/}
                                {/*    <div>{user.email}</div>*/}
                                {/*</div>*/}
                                <Card className="w-100 border-0 m-0" >
                                    <Card.Img variant="top" style={{width: '100%', height: '50%',margin: '0'}}  src="https://img.icons8.com/color/96/000000/user-male-circle--v2.png" />
                                    <Card.Body className="m-0">
                                        <Card.Title className={"text-center"}>{user.firstName}</Card.Title>
                                        <Card.Text className={"text-center"}>
                                            {user.email}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="list-group">
                                <NavLink className="ml-4 nav-link" activeClassName={"activeAdminNavDLink"}
                                         to={"/"}><i className="fas fa-home"/> Dashboard</NavLink>
                                {/*<hr style={{margin:'0.5rem',height:'0.1rem',background:'black'}}/>*/}
                                <NavLink className="ml-4 nav-link" to={"/products"}
                                         activeClassName={"activeAdminNavLink"}> <i
                                    className="fas fa-shopping-cart"/> Products</NavLink>
                                <NavLink className="ml-4 nav-link" to={"/orders"}
                                         activeClassName={"activeAdminNavLink"}> <i className="fas fa-truck"/> Orders</NavLink>
                                <NavLink className=" nav-link ml-4" to={"/category"}
                                         activeClassName={"activeAdminNavLink"}> <i
                                    className="fas fa-shopping-basket"/> Category</NavLink>
                                <TogglerButton />
                            </div>
                        </div>


                        <div id="page-content-wrapper">

                            <nav className="navbar navbar-expand-lg navbar-light border-bottom">
                                <button
                                    className="btn text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                                    id="menu-toggle" onClick={toggleClick}><i className={"fas fa-bars"}/>
                                </button>

                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                        <li className="nav-item">
                                            <span className="btn text-black hover:text-purple-500 logout" onClick={()=>{
                                                dispatch(signOut())
                                            }}>Log Out &nbsp;<i className="fas fa-sign-out-alt"/></span>
                                        </li>
                                        {/*<li className="nav-item dropdown">*/}
                                        {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"*/}
                                        {/*       role="button" data-toggle="dropdown" aria-haspopup="true"*/}
                                        {/*       aria-expanded="false">*/}
                                        {/*        Dropdown*/}
                                        {/*    </a>*/}
                                        {/*    <div className="dropdown-menu dropdown-menu-right"*/}
                                        {/*         aria-labelledby="navbarDropdown">*/}
                                        {/*        <a className="dropdown-item" href="#">Action</a>*/}
                                        {/*        <a className="dropdown-item" href="#">Another action</a>*/}
                                        {/*        <div className="dropdown-divider"></div>*/}
                                        {/*        <a className="dropdown-item" href="#">Something else here</a>*/}
                                        {/*    </div>*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>
                            </nav>

                            <div className="container-fluid">
                                <Row>
                                    <Col md={9} >
                                        <h1 className="mt-4 mb-4 text-4xl text-purple-900 font-weight-bolder">{`${getTime()}, ${user.firstName}`}</h1>
                                        {props.children}
                                    </Col>
                                    <Col md={3}>
                                        {/*<p className="font-weight-bolder mt-4 mr-3"> {getDateTime()}</p>*/}
                                        <Calendar
                                        className={['shadow','mt-2','border-0','p-1','borderRad']}/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </>) : props.children
            }

        </div>
    )
}

export default Layout
