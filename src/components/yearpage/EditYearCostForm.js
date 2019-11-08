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

const EditYearForm = props => {
  const [yearEdit, setYearFields] = useState([]);
  const name = useRef();

  const getYear = () => {
    APIManger.get("years", props.match.params.yearId).then(response => {
      setYearFields(response);
    });
  };

  const handleUpdate = e => {
    e.preventDefault();
    const UpdateYearInfo = {
      id: yearEdit.id,
      name: name.current.value
    };
    APIManger.put("years", UpdateYearInfo).then(() => {
      props.history.push(`/costpage/${props.match.params.collegeId}`);
    });
  };

  useEffect(() => {
    getYear();
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <FormText className="h3 mb-3 font-weight-normal, , formYearTitle">
              Edit Year
            </FormText>
            <Card className="formCenter">
              <Form onSubmit={handleUpdate}>
                <FormGroup className="contentForm">
                  <Label htmlFor="inputAddress"> Year Title </Label>
                  <input
                    ref={name}
                    type="text"
                    name="address"
                    className="form-control"
                    defaultValue={yearEdit.name}
                    required
                  />
                </FormGroup>
                <Button className="buttonForm" type="submit">
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EditYearForm;
