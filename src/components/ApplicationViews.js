import { Route } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { withRouter, Redirect } from "react-router-dom"
import useSimpleAuth from "./hooks/ui/useSimpleAuth"
import Register from "./auth/Register"
import Login from "./auth/Login"
import MyCollege from "./college/MyColleges"
import AddCollegeForm from "./college/AddCollegeForm"
import CostPage from "../components/costpage/CostPage"
import AddPaymentForm from "../components/costandpayment/paymentform"
import CostStream from "../components/costandpayment/coststream"

const ApplicationViews = () => {
    const { isAuthenticated } = useSimpleAuth()

    return (
        <React.Fragment>
            <Route
                exact path="/" render={props => {
                    if(isAuthenticated()) return(
                   <MyCollege {...props} />
                 )
                 else return <Redirect to="/login"/>
                }}
            />

            <Route
                exact path="/costpage/:collegeId(\d+)" render={props => {
                    if(isAuthenticated()) return(
                   <CostStream {...props} />
                 )
                 else return <Redirect to="/login"/>
                }}
            />
            <Route
                exact path="/costpage/:collegeId(\d+)" render={props => {
                    if(isAuthenticated()) return(
                   <AddPaymentForm {...props} />
                 )
                 else return <Redirect to="/login"/>
                }}
            />

            <Route
                exact path="/addcollege" render={props => {
                    if(isAuthenticated()) return(
                    < AddCollegeForm {...props} />
                    )
                    else return <Redirect to="/login"/>
                }} />


            <Route
                path="/register" render={props => {
                    return <Register {...props} />
                }}
            />

            <Route
                path="/login" render={props => {
                    return <Login {...props} />
                }}
            />





        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)