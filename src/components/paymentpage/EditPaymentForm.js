import React, { useRef, useEffect, useState } from "react";
import APIManger from "../../modules/APIManager";
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

const EditPaymentForm = props => {
  const [paymentEdit, setPaymentFields] = useState([]);
  const name = useRef();

  const amount = useRef();

  const getPayment = () => {
    APIManger.get("payments", props.match.params.yearId).then(response => {
      setPaymentFields(response);
    });
  };

  const handleUpdate = e => {
    e.preventDefault();
    const UpdatePaymentInfo = {
      id: paymentEdit.id,
      name: name.current.value,
      amount: parseInt(amount.current.value)
    };
    APIManger.put("payments", UpdatePaymentInfo).then(() => {
      props.history.push(`/paymentpage/${props.match.params.collegeId}`);
    });
  };

  useEffect(() => {
    getPayment();
  }, []);

  return (
    <>
      <main style={{ textAlign: "center" }}>
      <Container>
      <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
      <FormText className="h3 mb-3 font-weight-normal, formTitle">Edit Form</FormText>
        <Card className = 'formCenter'>

        <Form onSubmit={handleUpdate}>
          <FormGroup>
            <Label htmlFor="inputpayment"> Payment Name </Label>
            <input
              ref={name}
              type="text"
              name="payment"
              className="form-control"
              defaultValue={paymentEdit.name}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="inputAmount"> Amount </Label>
            <input
              ref={amount}
              type="text"
              name="amount"
              className="form-control"
              defaultValue={paymentEdit.amount}
              required
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit"> Edit Payment</Button>
          </FormGroup>
        </Form>
        </Card>
        </Col>
        </Row>
        </Container>
      </main>
    </>
  );
};

export default EditPaymentForm;
