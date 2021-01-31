import React from 'react'
import Layout from "../../components/Layout";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Input from '../../components/UI/Input';
import background from '../../images/background.png'

const Signup = () => {
    return (
        <>
            <Layout>

                 <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                     <div><img alt={""} src={background} /></div>
                     <div>
                         <div className="relative mt-5 py-3 sm:max-w-xl sm:mx-auto">
                             <div className="absolute bg-purple-500 inset-0  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"/>
                             <div className="relative px-2 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20 ">
                                 <div className="max-w-md mx-auto ">
                                     <div className="divide-y divide-gray-200 ">

                                         <Row className="py-2 ">
                                             <Col>
                                                 <p className="text-base font-black md:text-3xl text-purple-500 flex justify-center">Sign Up</p>
                                             </Col>
                                         </Row>
                                         <Row className="py-3" >
                                             <Col>
                                                 <Form>
                                                     <Row>
                                                         <Col md={6}>
                                                             <Input
                                                                 label='First Name'
                                                                 type='text'
                                                                 placeholder='First Name'
                                                                 value=""
                                                                 onChange={() =>{}}
                                                             />
                                                         </Col>
                                                         <Col md={6}>
                                                             <Input
                                                                 label='Last Name'
                                                                 type='text'
                                                                 placeholder='Last Name'
                                                                 value=""
                                                                 onChange={() =>{}}
                                                             />
                                                         </Col>
                                                     </Row>
                                                     <Input
                                                         label='Email'
                                                         type='email'
                                                         placeholder='Email'
                                                         value=""
                                                         onChange={() =>{}}
                                                     />
                                                     <Input
                                                         label='Password'
                                                         type='password'
                                                         placeholder='Password'
                                                         value=""
                                                         onChange={() =>{}}
                                                     />

                                                     <div className="flex justify-center">
                                                         <Button className="bg-purple-600 w-100"  type="submit">
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

                 </div>


            </Layout>
        </>
    )
}

export default Signup
