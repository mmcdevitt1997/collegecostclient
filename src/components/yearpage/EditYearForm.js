import React, { useRef, useEffect, useState } from "react";
import APIManger from "../../modules/APIManager";

const EditYearForm = props => {
  const [yearEdit, setYearFields] = useState([]);
  const name = useRef();

  const getYear = () => {
    APIManger.get("years", props.match.params.collegeId).then(response => {
      setYearFields(response);
    });
  };

  const handleUpdate = e => {
    e.preventDefault();
    const UpdateYearInfo = {
      id: yearEdit.id,
      name: name.current.value,
    };
    APIManger.put("years", UpdateYearInfo).then(() => {
      props.history.push("/");
    });
  };


  useEffect(() => {
    getYear();
  }, []);

  return (
    <>
      <main style={{ textAlign: "center" }}>

          <h1 className="h3 mb-3 font-weight-normal">Edit Form</h1>

              <form  onSubmit={handleUpdate}>
                <fieldset>
                  <label htmlFor="inputAddress"> Year Name </label>
                  <input
                    ref={name}
                    type="text"
                    name="address"
                    className="form-control"
                    defaultValue={yearEdit.name}
                    required
                  />
                </fieldset>

                <div>
            <button type="submit">Edit</button>
          </div>
              </form>



      </main>
    </>
  );
};

export default EditYearForm;
