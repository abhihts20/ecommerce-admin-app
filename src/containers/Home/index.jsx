import React from 'react'
import Layout from '../../components/Layout'
import {Jumbotron} from 'react-bootstrap'

const Home = () => {
    const theme= window.localStorage.getItem('theme') 
    return (
        <>
            <Layout>
                <Jumbotron className="text-center"><h1>Welcome to Dashboard</h1></Jumbotron>
            </Layout>
        </>
    )
}

export default Home
