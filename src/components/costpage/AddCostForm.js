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

const AddCostForm = props => {
  const name = useRef();
  const year = useRef();
  const amount = useRef();
  const [yearState, setyear] = useState([]);

  const AddCost = e => {
    e.preventDefault();
    const AddCostInfo = {
      name: name.current.value,
      amount: parseInt(amount.current.value),
      year: year.current.value
    };

    ApiManger.post("costs", AddCostInfo).then(() => {
      props.history.push(`/costpage/${props.match.params.collegeId}`);
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
      <FormText className="h3 mb-3 font-weight-normal, costTitle">Add Cost</FormText>
      <Card className = 'formCenter'>
      <Form>
        <FormGroup className = "contentForm">
          <Label htmlFor="name">Name of Cost:</Label>
          <input type="text" name="name" ref={name} placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="amount">Cost Amount $</Label>
          <input
            type="number"
            min="0"
            name="amount"
            ref={amount}
            placeholder="Cost Amount $"
          />
        </FormGroup>
        <FormGroup className= "yearForm">
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
        <FormGroup>
        <Button className = 'buttonForm' onClick={e => AddCost(e)}>Submit</Button>
        </FormGroup>
      </Form>
      </Card>
      </Col>
      </Row>
      </Container>
    </React.Fragment>
  );
};

export default AddCostForm;
