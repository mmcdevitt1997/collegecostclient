import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager";
import { Card, CardTitle, Button, CardBody, CardSubtitle } from "reactstrap";
import CostYearly from "./CostYearly"

const CostPage = props => {
  const college = useRef()
  const [costData, setCost] = useState([]);
  const [myColleges, setMyColleges] = useState([]);



  const getMyColleges = () => {
    return ApiManger.getAll("colleges").then(setMyColleges)
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
              <h5> Yearly Balance ${year.yearly_balance}</h5>
              </div>

               <div>
              {year['costs'].map(cost => {
                  return(
                    <Card key={cost.id} className="card">
                    <p>{cost.name} ${cost.amount}</p>
                    <Button>Edit</Button>
                    <button onClick={() => deleteCost(cost.id)}> Delete </button>
                    </Card>
              )})}
                </div>
              <ul>
              <br />
            </ul>
          </Card>
        </div>
        )})}
    </>
  );
};
export default CostPage;
