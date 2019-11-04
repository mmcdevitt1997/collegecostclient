import React, { useRef, useEffect, useState } from "react";

import ApiManger from "../../modules/APIManager";
import {

    Card,
    CardTitle,
    Button,
    CardBody,
    CardSubtitle
  } from 'reactstrap'

const CostYearly = props => {
  const [costData, setCost] = useState([]);


  const getCost = () => {
    return ApiManger.chartdataAll(this.props.id).then(setCost)

  };
  useEffect(() => {
    getCost();
  }, []);


  return (
    <>
      <h1>My Cost</h1>
      <Button onClick={() => {props.history.push("/addcollege")}}> Add Cost </Button>
      {costData.map(year=> {
        return (

          <Card key={year.id} className="card">
              <h3>{year.name}</h3>
              <h5>${year.yearly_balance}</h5>

               <div>
              {year['costs'].map(cost => {
                  return(<p>{cost.name}: ${cost.amount}</p>
              )})}
                </div>
          </Card>
        );
      })}
    </>
  );

}

export default CostYearly