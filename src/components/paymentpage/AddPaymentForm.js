import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Card,
  FormText
} from "reactstrap";

const AddPaymentForm = props => {
  const name = useRef();
  const year = useRef();
  const amount = useRef();
  const [yearState, setyear] = useState([]);

  const AddPayment = e => {
    e.preventDefault();
    const AddPaymentInfo = {
      name: name.current.value,
      amount: parseInt(amount.current.value),
      year: year.current.value
    };

    ApiManger.post("payments", AddPaymentInfo).then(() => {
      props.history.push(`/paymentpage/${props.match.params.collegeId}`);
    });
  };
  const getYears = () => {
    ApiManger.chartdataAll(props.match.params.collegeId).then(response => {
      setyear(response);
    });
  };

  useEffect(() => {
    getYears();
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <FormText className="h3 mb-3 font-weight-normal, paymentTitle">
              Add Payment
            </FormText>
            <Card className="formCenter">
              <Form>
                <FormGroup className="contentForm">
                  <Label htmlFor="name">Name of Payment: </Label>
                  <input
                    type="text"
                    name="name"
                    ref={name}
                    placeholder="Name"
                  />
                </FormGroup>
                <FormGroup className="contentForm">
                  <Label htmlFor="amount">Payment Amount: $ </Label>
                  <input
                    type="number"
                    min="0"
                    name="amount"
                    ref={amount}
                    placeholder="Payment Amount $ "
                  />
                </FormGroup>
                <FormGroup className="yearForm">
                  <Label htmlFor="amount">Year: </Label>
                  <select type="year" name="year" ref={year}>
                    <option>Select Year</option>
                    {yearState.map(year => {
                      return (
                        <option key={year.id} id={year.id} value={year.id}>
                          {year.name}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
                <Button className="buttonForm" onClick={e => AddPayment(e)}>
                  Add Payment
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AddPaymentForm;
