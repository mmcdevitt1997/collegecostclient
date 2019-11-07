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

const EditCollegeForm = props => {
  const [collegeEdit, setCollegeFields] = useState([]);
  const name = useRef();


  const getCollege = () => {
    APIManger.get("colleges", props.match.params.collegeId).then(response => {
      setCollegeFields(response);
    });
  };

  const handleUpdate = e => {
    e.preventDefault();
    const UpdateCollegeInfo = {
      id: collegeEdit.id,
      name: name.current.value,
    };
    APIManger.put("colleges", UpdateCollegeInfo).then(() => {
      props.history.push("/");
    });
  };

  useEffect(() => {
    getCollege();
  }, []);

  return (
    <>
      <main style={{ textAlign: "center" }}>
      <Container>
        <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <FormText className="h3 mb-3 font-weight-normal">Edit College Form</FormText>
          <Card className = 'formCenter'>


        <Form onSubmit={handleUpdate}>
          <FormGroup>
            <Label htmlFor="inputAddress"> College Name: </Label>
            <input
              ref={name}
              type="text"
              name="address"
              className="form-control"
              defaultValue={collegeEdit.name}
              required
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit"> Submit</Button>
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

export default EditCollegeForm;
