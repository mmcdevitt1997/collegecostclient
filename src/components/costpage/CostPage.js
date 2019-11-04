import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager";
import { Card, CardTitle, Button, CardBody, CardSubtitle } from "reactstrap";
import CostYearly from "./CostYearly"

const CostPage = props => {
  const college = useRef()
  const [costData, setCost] = useState([]);
  const [myColleges, setMyColleges] = useState([]);



  const getMyColleges = () => {
    return ApiManger.getAll("colleges").then(setMyColleges);
  };
  const deleteMyCollege = id => {
    ApiManger.delete(id);
  };
  const updateMyCollege = id => {
    ApiManger.put("college", id).then(getMyColleges);
  };

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

          {myColleges.map(college => {
            return (
              <div>
              <h1> {college.name} Cost </h1>
              <Button onClick={() => {props.history.push(`/addcost/${college.id}`)}}> Add Cost </Button>
            </div>
            );
          })}

        </div>
        {costData.map(year => {
          return (
        <div>
          <Card key={year.id} className="card">
            <div>
              <h3>{year.name}</h3>
              <h5>${year.yearly_balance}</h5>
              </div>

               <div>
              {year['costs'].map(cost => {
                  return(
                  <p> {cost.name} ${cost.amount}</p>
              )})}
                </div>
              <ul>
              <br />
              <button onClick={() => {props.history.push(`/costpage/${year.id}`)}}>Edit</button>
              <button onClick={() => {props.history.push(`/costpage/${year.id}`)}}>Delete</button>
            </ul>
          </Card>
        </div>
        )})}
    </>
  );
};
export default CostPage;
