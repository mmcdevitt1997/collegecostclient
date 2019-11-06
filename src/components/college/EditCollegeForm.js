import React, { useRef, useEffect, useState } from "react";
import APIManger from "../../modules/APIManager";
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';

const EditCollegeForm = props => {
  const [collegeEdit, setCollegeFields] = useState([]);
  const name = useRef();
  const numberofyears = useRef();

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
        <FormText className="h3 mb-3 font-weight-normal">Edit College Form</FormText>

        <Form onSubmit={handleUpdate}>
          <FormGroup>
            <Label htmlFor="inputAddress"> College Name </Label>
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
            <Button type="submit"> SubmitEdit</Button>
          </FormGroup>
        </Form>
      </main>
    </>
  );
};

export default EditCollegeForm;
