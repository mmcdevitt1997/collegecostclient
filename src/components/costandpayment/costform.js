import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager";

const AddCostForm = props => {
  const amount = useRef();
  const costtype =useRef()
  const year = useRef()
  const [costType, setcosttype] = useState([]);
  const [yearState, setyear] = useState([]);

  const addCost = e => {
    e.preventDefault();
    const newCostInfo = {
      year: year.current.value,
      amount: parseInt(amount.current.value),
      costtype: costtype.current.value
    };
    ApiManger.post("costs", newCostInfo).then(() => {
      props.history.push("/");
    });
  };

  const getcosttypes = () => {
    ApiManger.getAll("costtypes").then(response => {
      setcosttype(response);
    });
}
    const getYears = () => {
      ApiManger.chartdata(props.match.params.collegeId).then(response => {
        setyear(response.years);
      });
    };
    useEffect(() => {
      getcosttypes();
      getYears();
    }, []);

    return (
      <React.Fragment>
        <form>
        <div>
            <label htmlFor="amount">Cost Amount $</label>
            <input
              type="number"
              name="Amount"
              ref={amount}
              placeholder="Cost Amount"
            />
          </div>
          <div>
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
          </div>
          <div>
            <select type="costtype" name="costtype" ref={costtype}>
            <option>Select Cost Type</option>
              {costType.map(costtype=> {
                return (
                  <option key={costtype.id} id={costtype.id} value={costtype.id}>
                    {costtype.name}
                  </option>
                );
              })}
            </select>
            </div>

          <button onClick={e => addCost(e)}>Add Cost</button>
        </form>
      </React.Fragment>
    );
  };

export default AddCostForm;