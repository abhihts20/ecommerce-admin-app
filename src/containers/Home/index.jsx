import React from 'react'
import './Home.css'
import Layout from '../../components/Layout'
import {Col, Container, Row} from 'react-bootstrap'
import {NavLink} from "react-router-dom";
import {signOut} from "../../redux/actions";
import {useDispatch} from "react-redux";

const Home = () => {
    // const theme= window.localStorage.getItem('theme')
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signOut());
    }
    return (
        <>
            <Layout sidebar>
                {/*<Jumbotron className="text-center"><h1>Welcome to Dashboard</h1></Jumbotron>*/}
            </Layout>
        </>
    )
}

export default Home
