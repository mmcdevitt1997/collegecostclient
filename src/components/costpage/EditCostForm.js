import React, { useRef, useEffect, useState } from "react";
import APIManger from "../../modules/APIManager";

const EditCostForm = props => {
  const [costEdit, setCostFields] = useState([]);
  const name = useRef();

  const amount = useRef();

  const getCost = () => {
    APIManger.get("costs", props.match.params.collegeId).then(response => {
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
      props.history.push(`/costpage/${costEdit.id}`);
    });
  };

  useEffect(() => {
    getCost();
  }, []);

  return (
    <>
      <main style={{ textAlign: "center" }}>
        <h1 className="h3 mb-3 font-weight-normal">Edit Cost Form</h1>

        <form onSubmit={handleUpdate}>
          <fieldset>
            <label htmlFor="inputAddress"> Cost Name </label>
            <input
              ref={name}
              type="text"
              name="address"
              className="form-control"
              defaultValue={costEdit.name}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPhoneNumber"> Amount </label>
            <input
              ref={amount}
              type="text"
              name="phoneNumber"
              className="form-control"
              defaultValue={costEdit.amount}
              required
            />
          </fieldset>
          <div>
            <button type="submit"> Edit</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default EditCostForm;
