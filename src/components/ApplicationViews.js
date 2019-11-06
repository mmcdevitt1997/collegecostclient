import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import useSimpleAuth from "./hooks/ui/useSimpleAuth";
import Register from "./auth/Register";
import Login from "./auth/Login";
import MyCollege from "./college/MyColleges";
import AddCollegeForm from "./college/AddCollegeForm";
import AddCostForm from "./costpage/AddCostForm";
import PaymentPage from "./paymentpage/PaymentPage";
import AddPaymentForm from "./paymentpage/AddPaymentForm";
import EditPaymentForm from "./paymentpage/EditPaymentForm";
import CostPage from "../components/costpage/CostPage";
import EditCostForm from "../components/costpage/EditCostForm";
import EditCollegeForm from "./college/EditCollegeForm";
import EditYearForm from "./yearpage/EditYearForm"
import ChartPage from "./chart/ChartPage"



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
          if (isAuthenticated()) return <PaymentPage {...props} />;
          else return <Redirect to="/login" />;
        }}
      />

      <Route
        exact
        path="/editpaymentpage/:collegeId(\d+)"
        render={props => {
          if (isAuthenticated()) return <EditPaymentForm {...props} />;
          else return <Redirect to="/login" />;
        }}
      />

      <Route
        exact
        path="/edityearpage/:collegeId(\d+)"
        render={props => {
          if (isAuthenticated()) return <EditYearForm {...props} />;
          else return <Redirect to="/login" />;
        }}
      />

        <Route
        exact
        path="/chartpage/:collegeId(\d+)"
        render={props => {
          if (isAuthenticated()) return <ChartPage {...props} />;
          else return <Redirect to="/login" />;
        }}
      />

      <Route
        exact
        path="/editcostpage/:collegeId(\d+)"
        render={props => {
          if (isAuthenticated()) return <EditCostForm {...props} />;
          else return <Redirect to="/login" />;
        }}
      />
      <Route
        exact
        path="/editcollegepage/:collegeId(\d+)"
        render={props => {
          if (isAuthenticated()) return <EditCollegeForm {...props} />;
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
          if (isAuthenticated()) return <AddPaymentForm {...props} />;
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
