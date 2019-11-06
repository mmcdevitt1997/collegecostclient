import React, { useState, useEffect } from "react";
import ApiManger from "../../modules/APIManager"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import {

  Card,
  CardTitle,
  Button,
  CardBody,
  CardSubtitle
} from 'reactstrap'



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
          <h1>My College List</h1>
          <Button onClick={() => {props.history.push("/addcollege")}}> Add College</Button>

          {myColleges.map(myCollege=> {
            return (

              <Card key={myCollege.id} className="card">
                  <h3>{myCollege.name}</h3>
                <ul>
                  <CardBody> Total Cost ${myCollege.college_total_cost}</CardBody>
                  <CardBody> Total Payment ${myCollege.college_total_payment}</CardBody>
                  <CardBody> Total balance ${myCollege.college_balance}</CardBody>
                  <br />
                  <button onClick={() => deleteMyCollege(myCollege.id)}>
                    Delete
                  </button>

                  <button onClick={() => {props.history.push(`/chartpage/${myCollege.id}`)}}>College Graph</button>
                  <button onClick={() => {props.history.push(`/costpage/${myCollege.id}`)}}>Cost Page</button>
                  <button onClick={() => {props.history.push(`/paymentpage/${myCollege.id}`)}}>Payment Page</button>
                  <button onClick={() => {props.history.push(`/editcollegepage/${myCollege.id}`)}}>Edit</button>
                </ul>
              </Card>
            );
          })}
        </>
      );

}
export default MyColleges;


