import React, {useEffect, useState} from 'react'
import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from "../../components/UI/Input";
import {isUserLoggedIn, login} from "../../redux/actions";
import background from '../../images/background.png'
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email, password
        }
        dispatch(login(user));
    }
    if (auth.authenticate) {
        return <Redirect to={`/`}/>
    }

    return (
        <>
            <Layout>
                {/*<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">*/}

                {/*</div>*/}
               <Container fluid>
                   <Row>
                       <Col lg={true} className="order-1 order-md-0">
                           <div className="order-1 order-sm-2 order-lg-1"><img alt={""} src={background}/></div>
                       </Col>
                       <Col lg={true} className="order-0 order-md-1">
                           <div className="order-2 order-sm-1 order-lg-2">
                               <div className="relative mt-5 py-3 sm:max-w-xl sm:mx-auto">
                                   <div className="absolute bg-purple-500 inset-0  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"/>
                                   <div className="relative  px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                       <div className="max-w-md mx-auto">
                                           <div className="divide-y divide-gray-200 justify-center">
                                               <Row className="py-2 ">
                                                   <Col>
                                                       <p className="text-xl font-black md:text-3xl text-purple-500 flex justify-center">Sign
                                                           In</p>
                                                   </Col>
                                               </Row>
                                               <Row className="py-3">
                                                   <Col>
                                                       <Form onSubmit={userLogin}>
                                                           <Input
                                                               label='Email'
                                                               type='email'
                                                               placeholder='Email'
                                                               value={email}
                                                               onChange={(e) => {
                                                                   setEmail(e.target.value)
                                                               }}
                                                           />
                                                           <Input
                                                               label='Password'
                                                               type='password'
                                                               placeholder='Password'
                                                               value={password}
                                                               className="focus:ring-2 focus:ring-blue-600 "
                                                               onChange={(e) => {
                                                                   setPassword(e.target.value)
                                                               }}
                                                           />
                                                           <div className="flex justify-center">
                                                               <Button className="bg-purple-600 btn-block" type="submit">
                                                                   Submit
                                                               </Button>
                                                           </div>
                                                       </Form>
                                                   </Col>
                                               </Row>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </Col>
                   </Row>

               </Container>

            </Layout>
        </>
    )
}

export default Signin
