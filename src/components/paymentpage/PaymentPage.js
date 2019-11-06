import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager";
import { Card, CardTitle, Button, CardBody, CardSubtitle } from "reactstrap";

const PaymentPage = props => {
  const college = useRef();
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
      <div>
        <div>
          <h1> {myColleges.name} Payment </h1>
          <Button
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
            <Card key={year.id} className="card">
              <div>
                <h3>{year.name}</h3>
                <h5> Yearly Balance ${year.yearly_balance}</h5>
                <h5> Yearly Payment ${year.payment}</h5>
                <button
                  onClick={() => {
                    props.history.push(`/edityearpage/${year.id}`);
                  }}
                >
                  Edit
                </button>
              </div>

              <div>
                {year["payments"].map(payment => {
                  return (
                    <Card key={payment.id} className="card">
                      <p>
                        {payment.name} ${payment.amount}
                      </p>
                      <Button onClick={() => deletePayment(payment.id)}>
                        {" "}
                        Delete
                      </Button>
                      <Button
                        onClick={() => {
                          props.history.push(`/editpaymentpage/${payment.id}`);
                        }}
                      >
                        Edit
                      </Button>
                    </Card>
                  );
                })}
              </div>
              <ul>
                <br />
              </ul>
            </Card>
          </div>
        );
      })}
    </>
  );
};
export default PaymentPage;
