import React from 'react'
import './Input.css'
import {Form} from "react-bootstrap";

const Input = (props) => {
    return (
        <>
            <Form.Group>
                <Form.Label className="text-purple-500">{props.label}</Form.Label>
                <Form.Control type={props.type}
                              className={"shadow focus:ring-3 focus:ring-purple-500"}
                              placeholder={props.placeholder}
                              onChange={props.onChange}/>
                <Form.Text className="text-muted">
                    {props.errorMessage}
                </Form.Text>
            </Form.Group>
        </>
    )
}

export default Input
