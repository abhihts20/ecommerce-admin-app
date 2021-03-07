import React from 'react'
import './Home.css'
import Layout from '../../components/Layout'
import {Col, Container, Row} from 'react-bootstrap'
import {NavLink} from "react-router-dom";
import {signOut} from "../../redux/actions";
import {useDispatch} from "react-redux";
import sun from '../../images/sun.gif'

const Home = () => {
    // const theme= window.localStorage.getItem('theme')
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signOut());
    }
    const user = JSON.parse(window.localStorage.getItem("user"))
    const getGreeting = () => {
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
        <>
            <Layout sidebar>
                <Row>
                    <Col lg={10} md={10} sm={12} xs={12}>
                        <p className="text-3xl font-weight-bolder">{getGreeting()}, {user.firstName} <img style={{display: 'inline',width:'50px',height:'50px'}} src={sun} alt={""}/> </p>
                        <p className={"text-xl"}>You have some work to do !</p>
                        <Row className="mt-4 mb-2">
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <div className="shadow p-4 m-2 d-flex flex-column justify-content-between align-items-end" style={{borderRadius: '10px',height:'200px',backgroundColor:'#E1F0FF'}}>
                                    <p className="text-2xl text-blue-500">Weekly Stats</p>
                                    <p className="text-4xl text-blue-500">50</p>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <div className="shadow p-4 m-2 d-flex flex-column justify-content-between align-items-end" style={{borderRadius: '10px',height:'200px',backgroundColor:'#FFF4DE'}}>
                                    <p className="text-2xl text-yellow-500">New Users</p>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <div className="shadow p-4 m-2 d-flex flex-column justify-content-between align-items-end" style={{borderRadius: '10px',height:'200px',backgroundColor:'#C9F7F5'}}>
                                    <p className="text-2xl text-green-500">Weekly Stats</p>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <div className="shadow p-4 m-2 d-flex flex-column justify-content-between align-items-end" style={{borderRadius: '10px',height:'200px',backgroundColor:'#FFE2E5'}}>
                                    <p className="text-2xl text-pink-500">Weekly Stats</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2} md={2} sm={12} xs={12}>
                        <h1 className={"text-2xl"}>{getDateTime()}</h1>

                    </Col>
                </Row>
            </Layout>
        </>
    )
}

export default Home
