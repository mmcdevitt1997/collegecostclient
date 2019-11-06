import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager";
import "./Payment.css";
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

const PaymentPage = props => {
  const [paymentData, setPayment] = useState([]);
  const [myColleges, setMyColleges] = useState([]);

  const getMyColleges = () => {
    return ApiManger.get("colleges", props.match.params.collegeId).then(
      setMyColleges
    );
  };
  const deletePayment = id => {
    ApiManger.delete("payments", id).then(getPayment);
  };

  const getPayment = () => {
    return ApiManger.chartdataAll(props.match.params.collegeId).then(
      setPayment
    );
  };
  useEffect(() => {
    getPayment();
    getMyColleges();
  }, []);

  return (
    <>
      <Container>
        <div>
          <div>
            <h1 className="paymentTitle"> {myColleges.name} Payments </h1>
            <Button
              className="addPaymentButton"
              onClick={() => {
                props.history.push(`/addpayment/${myColleges.id}`);
              }}
            >
              Add Payment
            </Button>
          </div>
        </div>
        {paymentData.map(year => {
          return (
            <div>
              <Card key={year.id} className="card, yearSeparation">
                <div className="flexYear">
                  <h3>{year.name}</h3>
                  <Button
                    onClick={() => {
                      props.history.push(`/editpaymentyearpage/${props.match.params.collegeId}/${year.id}`);
                    }}
                  >
                    Edit Year
                  </Button>
                </div>
                <div className="flexYear">
                  <h5> Yearly Balance ${year.yearly_balance}</h5>
                  <h5> Yearly Payments ${year.payment}</h5>
                </div>

                <Table>
                <thead>
                    <tr>
                      <th>Payment Name</th>
                      <th>Payment Amount</th>
                    </tr>
                  </thead>
                  {year["payments"].map(payment => {
                    return (
                      <tbody key={payment.id} >
                        <tr>
                          <td>{payment.name}</td>

                          <td>${payment.amount}
                          <div className="paymentButtonFlex">
                        <Button
                        className="paymentButton"
                         onClick={() => deletePayment(payment.id)}>
                          X
                        </Button>
                        <Button
                         className="paymentButton"
                          onClick={() => {
                            props.history.push(
                              `/editpaymentpage/${props.match.params.collegeId}/${payment.id}`
                            );
                          }}
                        >
                          Edit
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
export default PaymentPage;
