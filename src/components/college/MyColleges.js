import React, { useState, useEffect } from "react";
import ApiManger from "../../modules/APIManager"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import "./College.css"
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  FormText
} from "reactstrap";


const MyColleges = props => {
    const [myColleges, setMyColleges] = useState([]);
    const { isAuthenticated } = useSimpleAuth();

    const getMyColleges = () => {
     return ApiManger.getAll("colleges").then(setMyColleges)
    }
    const deleteMyCollege = id => {
        ApiManger.delete("colleges", id).then(getMyColleges);
    }
    const updateMyCollege = (id) => {
        ApiManger.put("colleges", id).then(getMyColleges)
    }
    useEffect(() => {
        getMyColleges();
      }, []);

      return (
        <>
         <Container>
          <h1 className = "collegeTitle" >College List</h1>
          <Button className = "collegeButton" onClick={() => {props.history.push("/addcollege")}}> Add College</Button>

          {myColleges.map(myCollege=> {
            return (

              <Card key={myCollege.id} className="card, collegeCard">
                  <h2 className = "collegeTitleSub" >{myCollege.name}</h2>
                  <div className= "parentButton">
                  <Button onClick={() => {props.history.push(`/costpage/${myCollege.id}`)}}>Cost Page</Button>
                  <Button onClick={() => {props.history.push(`/paymentpage/${myCollege.id}`)}}>Payment Page</Button>
                  <Button onClick={() => {props.history.push(`/chartpage/${myCollege.id}`)}}>College Graph</Button>

                  </div>
                  <div className = "collegeContent">
                  <CardBody> Total Cost ${myCollege.college_total_cost}</CardBody>
                  <CardBody> Total Payment ${myCollege.college_total_payment}</CardBody>
                  <CardBody> Total balance ${myCollege.college_balance}</CardBody>
                  </div>
                  <br />

                  <div className = "editDeleteButton">
                  <Button onClick={() => deleteMyCollege(myCollege.id)}>
                   X
                  </Button>
                  <Button onClick={() => {props.history.push(`/editcollegepage/${myCollege.id}`)}}>Edit</Button>
                  </div>

              </Card>
            );
          })}
          </Container>
        </>
      );

}
export default MyColleges;


