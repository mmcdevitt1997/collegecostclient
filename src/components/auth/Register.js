import React, { useRef } from "react"
import { withRouter } from "react-router-dom"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./Login.css"


const Register = props => {
    const email = useRef()
    const userName = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const firstName = useRef()
    const lastName = useRef()
    const address = useRef()
    const phoneNumber = useRef()
    const { register } = useSimpleAuth()

    const handleRegister = (e) => {
        e.preventDefault()

        const newUser = {
            "username": userName.current.value,
            "first_name": firstName.current.value,
            "last_name": lastName.current.value,
            "address": address.current.value,
            "phone_number": phoneNumber.current.value,
            "email": email.current.value,
            "password": password.current.value
        }

        register(newUser).then(() => {
            props.history.push({
                pathname: "/"
            })
        })
    }

    return (
        <main style={{ textAlign: "center" }}>
            <Form className="form--login" onSubmit={handleRegister}>
                <FormText  className="h3 mb-3 font-weight-normal">Register for College Cost</FormText >
                <FormGroup>
                    <Label htmlFor="userName"> Username </Label>
                    <input ref={userName} type="text"
                        name="userName"
                        className="form-control"
                        placeholder="Username"
                        required autoFocus />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="firstName"> First Name </Label>
                    <Input ref={firstName} type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        required autoFocus />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName"> Last Name </Label>
                    <input ref={lastName} type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="inputEmail"> Email address </Label>
                    <input ref={email} type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="inputEmail"> Address </Label>
                    <input ref={address} type="text"
                        name="address"
                        className="form-control"
                        placeholder="Address"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="inputEmail"> Phone Number </Label>
                    <input ref={phoneNumber} type="text"
                        name="phoneNumber"
                        className="form-control"
                        placeholder="Phone number"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="inputPassword"> Password </Label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="verifyPassword"> Verify Password </Label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
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

export default withRouter(Register)