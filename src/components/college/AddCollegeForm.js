import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager"


const AddCollegeForm = props => {
    const name = useRef();
    const numberofyears = useRef();

const addCollege= e => {
        e.preventDefault();
    const newCollegeInfo = {
        name: name.current.value,
        numberofyears: parseInt(numberofyears.current.value)
      };

      ApiManger.post("colleges", newCollegeInfo).then(() => {
        props.history.push("/")
      })};
      return (
        <React.Fragment>
          <form>
            <div>
              <label htmlFor="name">Name of college</label>
              <input type="text" name="name" ref={name} placeholder="Name" />
            </div>
            <div>
              <label htmlFor="numberofyears">Number of years in school</label>
              <input type="number" name="numberofyears" ref={numberofyears} placeholder="Years in College" />
            </div>
            <button onClick={e =>addCollege (e)}>Add to product List</button>
          </form>
        </React.Fragment>
      );
}
export default AddCollegeForm;