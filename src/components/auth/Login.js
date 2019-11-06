import React, { useRef } from "react"
import "./Login.css"
import useSimpleAuth from "../hooks/ui/useSimpleAuth";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Login = props => {
    const username = useRef()
    const password = useRef()
    const { login } = useSimpleAuth()

    // Simplistic handler for login submit
    const handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the username and password that
            the customer enters into local storage.
        */
        const credentials = {
            "username": username.current.value,
            "password": password.current.value
        }

        login(credentials)
            .then(() => {
                props.history.push({
                    pathname: "/"
                })
            })
    }

    return (
        <main style={{textAlign:"center"}}>
            <Form className="form--login" onSubmit={handleLogin}>
                <FormText className="h3 mb-3 font-weight-normal">Please sign in</FormText >
                <FormGroup>
                    <Label htmlFor="inputEmail"> Username </Label>
                    <input ref={username} type="username"
                        className="form-control"
                        placeholder="Username"
                        required autoFocus />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="inputPassword"> Password </Label>
                    <input ref={password} type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </FormGroup>
                <FormGroup>
                    <Button type="submit">
                        Sign in
                    </Button>
                </FormGroup>
            </Form>
        </main>
    )
}

export default Login