import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import useSimpleAuth from "./hooks/ui/useSimpleAuth";
import Register from "./auth/Register";
import Login from "./auth/Login";
import MyCollege from "./college/MyColleges";
import AddCollegeForm from "./college/AddCollegeForm";
import AddCostForm from "./costpage/AddCostForm"
import PaymentPage from "./paymentpage/PaymentPage"
import AddPaymentForm from "./paymentpage/AddPaymentForm"

import CostPage from "../components/costpage/CostPage";

const ApplicationViews = () => {
  const { isAuthenticated } = useSimpleAuth();

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          if (isAuthenticated()) return <MyCollege {...props} />;
          else return <Redirect to="/login" />;
        }}
      />

      <Route
        exact
        path="/costpage/:collegeId(\d+)"
        render={props => {

          if (isAuthenticated()) return <CostPage {...props} />;
          else return <Redirect to="/login" />;
        }}
      />

      <Route
        exact
        path="/paymentpage/:collegeId(\d+)"
        render={props => {
          if (isAuthenticated()) return <PaymentPage  {...props} />;
          else return <Redirect to="/login" />;
        }}
      />

      <Route
        exact
        path="/addcollege"
        render={props => {
          if (isAuthenticated()) return <AddCollegeForm {...props} />;
          else return <Redirect to="/login" />;
        }}
      />
      <Route
        exact
        path="/addcost/:collegeId(\d+)"
        render={props => {
          if (isAuthenticated()) return <AddCostForm {...props} />;
          else return <Redirect to="/login" />;
        }}
      />
 <Route
        exact
        path="/addpayment/:collegeId(\d+)"
        render={props => {
          if (isAuthenticated()) return <AddPaymentForm  {...props} />;
          else return <Redirect to="/login" />;
        }}
      />

      <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />

      <Route
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
