import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager";
import CostYearly from "./CostYearly";
import "./Cost.css";
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
  FormText,
  Table
} from "reactstrap";

const CostPage = props => {
  const college = useRef();
  const [costData, setCost] = useState([]);
  const [myColleges, setMyColleges] = useState([]);

  const getMyColleges = () => {
    return ApiManger.get("colleges", props.match.params.collegeId).then(
      setMyColleges
    );
  };
  const deleteCost = id => {
    ApiManger.delete("costs", id).then(getCost);
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
      <Container>
        <div>
          <div>
            <h1 className="costTitle"> {myColleges.name} Cost </h1>
            <Button
              className="addCostButton"
              onClick={() => {
                props.history.push(`/addcost/${myColleges.id}`);
              }}
            >
              Add Cost
            </Button>
          </div>
        </div>
        {costData.map(year => {
          return (
            <div>
              <Card key={year.id} className="card, yearSeparation">

                  <div className="flexYear">
                    <h3>{year.name}</h3>
                    <Button
                      onClick={() => {
                        props.history.push(`/editcostyearpage/${props.match.params.collegeId}/${year.id}`);
                      }}
                    >
                      Edit Year
                    </Button>
                  </div>
                  <div className="flexYear">
                    <h5> Yearly Balance ${year.yearly_balance}</h5>
                    <h5> Yearly Cost ${year.cost}</h5>
                  </div>
                <Table>
                  <thead>
                    <tr>
                      <th>Cost Name</th>
                      <th>Cost Amount</th>
                    </tr>
                  </thead>
                  {year["costs"].map(cost => {
                    return (
                        <tbody key={cost.id} >
                          <tr>
                            <td>{cost.name}</td>

                            <td> ${cost.amount}

                            <div className="costButtonFlex">
                              <Button
                                className="costButton"
                                onClick={() => {
                                  props.history.push(
                                    `/editcostpage/${props.match.params.collegeId}/${cost.id}`
                                  );
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                className="costButton"
                                onClick={() => deleteCost(cost.id)}
                              >
                                {" "}
                                X{" "}
                              </Button>
                            </div>
                            </td>
                          </tr>
                        </tbody>

                    );
                  })}
                </Table>

                <br />
              </Card>
            </div>
          );
        })}
      </Container>
    </>
  );
};
export default CostPage;
