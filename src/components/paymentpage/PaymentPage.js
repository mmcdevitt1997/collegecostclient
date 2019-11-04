import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager";
import { Card, CardTitle, Button, CardBody, CardSubtitle } from "reactstrap";


const PaymentPage = props => {
  const college = useRef()
  const [paymentData, setPayment] = useState([]);
  const [myColleges, setMyColleges] = useState([]);



  const getMyColleges = () => {
    return ApiManger.getAll("colleges").then(setMyColleges);
  };
  const deletePayment = id => {
    ApiManger.delete("payments", id).then(getPayment)
  };
  const updateMyCollege = id => {
    ApiManger.put("college", id).then(getMyColleges);
  };

  const getPayment = () => {
    return ApiManger.chartdataAll(props.match.params.collegeId).then(setPayment);
  };
  useEffect(() => {
    getPayment();
    getMyColleges();
  }, []);

  return (
    <>

      <div>

          {myColleges.map(college => {
            return (
              <div>
              <h1> {college.name} Payment </h1>
              <Button onClick={() => {props.history.push(`/addpayment/${college.id}`)}}> Add Payment </Button>
            </div>
            );
          })}

        </div>
        {paymentData.map(year => {
          return (
        <div>
          <Card key={year.id} className="card">
            <div>
              <h3>{year.name}</h3>
              <h5>${year.yearly_balance}</h5>
              </div>

               <div>
              {year['payments'].map(payment => {
                  return(
                  <Card key={payment.id} className="card">
                  <p>{payment.name} ${payment.amount}</p>
                  <Button>Edit</Button>
                  <Button onClick={() => deletePayment(payment.id)}> Delete</Button>
                  </Card>
              )})}
                </div>
              <ul>
              <br />
              <button onClick={() => {props.history.push(`/paymentpage/${year.id}`)}}>Edit</button>
              <button onClick={() => {props.history.push(`/paymentpage/${year.id}`)}}>Delete</button>
            </ul>
          </Card>
        </div>
        )})}
    </>
  );
};
export default PaymentPage;
