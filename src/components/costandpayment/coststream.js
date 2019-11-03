import React, { useRef, useEffect, useState } from "react";
import AddCostForm from "./costform";
import ApiManger from "../../modules/APIManager";
import {

    Card,
    CardTitle,
    Button,
    CardBody,
    CardSubtitle
  } from 'reactstrap'

const CostStream = props => {
  const [costData, setCost] = useState([]);
  const [myColleges, setMyColleges] = useState([]);

  const getMyColleges = () => {
    return ApiManger.getAll("colleges").then(setMyColleges)
   }
   const deleteMyCollege = id => {
       ApiManger.delete(id)
   }
   const updateMyCollege = (id) => {
       ApiManger.put("college", id).then(getMyColleges)
   }

  const getCost = () => {
    return ApiManger.chartdataAll(props.match.params.collegeId).then(setCost);
  };
  useEffect(() => {
    getCost();
    getMyColleges()
  }, []);
  return (
    <>
      <h1>My college</h1>
      <Button onClick={() => {props.history.push("/addcollege")}}> Add Cost </Button>
      {costData.map(myCollege=> {
        return (

          <Card key={myCollege.id} className="card">
              <h3>{myCollege.name}</h3>
              <h5>${myCollege.yearly_balance}</h5>
               <div>

              {myCollege['costs'].map(cost => {
                  return(<p>${cost.amount}</p>

              )})}
                </div>
              <ul>
              <CardBody> Total Payment ${myCollege.college_total_payment}</CardBody>
              <CardBody> Total balance ${myCollege.college_balance}</CardBody>
              <br />
              <button onClick={() => {props.history.push(`/costpage/${myCollege.id}`)}}>College Graph</button>
            </ul>
          </Card>
        );
      })}
    </>
  );

}

export default CostStream