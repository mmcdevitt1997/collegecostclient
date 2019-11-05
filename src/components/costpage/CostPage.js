import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager";
import { Card, CardTitle, Button, CardBody, CardSubtitle } from "reactstrap";
import CostYearly from "./CostYearly"

const CostPage = props => {
  const college = useRef()
  const [costData, setCost] = useState([]);
  const [myColleges, setMyColleges] = useState([]);



  const getMyColleges = () => {
    return ApiManger.get("colleges",(props.match.params.collegeId) ).then(setMyColleges)
   }
   const deleteCost = id => {
       ApiManger.delete("costs", id).then(getCost)
   }
   const updateMyCollege = (id) => {
       ApiManger.put("colleges", id).then(getMyColleges)
   }

  const getCost = () => {
    return ApiManger.chartdataAll(props.match.params.collegeId).then(setCost);
  };
  useEffect(() => {
    getCost();
    getMyColleges();
  }, []);

  return (
    <>
      <div>
              <div>
              <h1> {myColleges.name} Cost </h1>
              <Button onClick={() => {props.history.push(`/addcost/${myColleges.id}`)}}> Add Cost </Button>
            </div>

        </div>
        {costData.map(year => {
          return (
        <div>


          <Card key={year.id} className="card">
            <div>
              <h3>{year.name}</h3>
              <button onClick={() => {props.history.push(`/edityearpage/${year.id}`)}}>Edit Year Name</button>
              <h5> Yearly Balance ${year.yearly_balance}</h5>
              <h5> Yearly Cost ${year.cost}</h5>

              </div>

               <div>
              {year['costs'].map(cost => {
                  return(
                    <Card key={cost.id} className="card">
                    <p>{cost.name} ${cost.amount}</p>
                    <Button onClick={() => {props.history.push(`/editcostpage/${cost.id}`)}}>Edit</Button>
                    <Button onClick={() => deleteCost(cost.id)}> Delete </Button>
                    </Card>
              )})}
                </div>

              <br />

          </Card>

        </div>
        )})}
    </>
  );
};
export default CostPage;
