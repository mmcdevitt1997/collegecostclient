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
  CardBody,
  CardHeader,
  FormText
} from "reactstrap";

const AddCollegeForm = props => {
  const name = useRef();
  const numberofyears = useRef();

  const addCollege = e => {
    e.preventDefault();
    const newCollegeInfo = {
      name: name.current.value,
      numberofyears: parseInt(numberofyears.current.value)
    };

    ApiManger.post("colleges", newCollegeInfo).then(() => {
      props.history.push("/");
    });
  };
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
          <FormText className="h3 mb-3 font-weight-normal, formPaymentTitle">Add College</FormText>
            <Card className="formCenter">
              <Form>
               <FormGroup className="contentForm">
                  <Label htmlFor="name">Name of college:</Label>
                  <input
                    type="text"
                    name="name"
                    ref={name}
                    placeholder="Name"
                  />
                </FormGroup>
                <FormGroup className="contentForm">
                  <Label htmlFor="numberofyears">
                    Number of years in college:
                  </Label>
                  <input
                    type="number"
                    min="0"
                    name="numberofyears"
                    ref={numberofyears}
                    placeholder="Years in College"
                  />
                </FormGroup>
                <Button className="buttonForm" onClick={e => addCollege(e)}>
                  Add College
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default AddCollegeForm;
