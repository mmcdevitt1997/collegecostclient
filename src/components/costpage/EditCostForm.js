import React, { useRef, useEffect, useState } from "react";
import APIManger from "../../modules/APIManager";
import { Button, Form, FormGroup, Label, FormText } from "reactstrap";

const EditCostForm = props => {
  const [costEdit, setCostFields] = useState([]);
  const name = useRef();

  const amount = useRef();

  const getCost = () => {
    APIManger.get("costs", props.match.params.yearId).then(response => {
      setCostFields(response);
    });
  };

  const handleUpdate = e => {
    e.preventDefault();
    const UpdateCostInfo = {
      id: costEdit.id,
      name: name.current.value,
      amount: parseInt(amount.current.value)
    };
    APIManger.put("costs", UpdateCostInfo).then(() => {
      props.history.push(`/costpage/${props.match.params.collegeId}`);
    });
  };

  useEffect(() => {
    getCost();
  }, []);

  return (
    <>
      <main style={{ textAlign: "center" }}>
        <FormText className="h3 mb-3 font-weight-normal">Edit Cost Form</FormText>

        <Form onSubmit={handleUpdate}>
          <FormGroup>
            <Label htmlFor="inputAddress"> Cost Name </Label>
            <input
              ref={name}
              type="text"
              name="address"
              className="form-control"
              defaultValue={costEdit.name}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="inputPhoneNumber"> Amount </Label>
            <input
              ref={amount}
              type="text"
              name="phoneNumber"
              className="form-control"
              defaultValue={costEdit.amount}
              required
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit"> Submit</Button>
          </FormGroup>
        </Form>
      </main>
    </>
  );
};

export default EditCostForm;
