import React, { useRef, useEffect, useState } from "react";
import APIManger from "../../modules/APIManager";

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
        <h1 className="h3 mb-3 font-weight-normal">Edit College Form</h1>

        <form onSubmit={handleUpdate}>
          <fieldset>
            <label htmlFor="inputAddress"> College Name </label>
            <input
              ref={name}
              type="text"
              name="address"
              className="form-control"
              defaultValue={collegeEdit.name}
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

export default EditCollegeForm;
