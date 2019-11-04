import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager"



const AddPaymentForm = props => {
    const name = useRef();
    const year = useRef();
    const amount = useRef();
    const [yearState, setyear] = useState([]);

const AddPayment = e => {
        e.preventDefault();
    const AddPaymentInfo = {
        name: name.current.value,
        amount:  parseInt(amount.current.value),
        year: year.current.value

      };

      ApiManger.post("payments", AddPaymentInfo).then(() => {
        props.history.push(`/paymentpage/${props.match.params.collegeId}`)
      })}
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
          <form>
            <div>
              <label htmlFor="name">Name of Payment:</label>
              <input type="text" name="name" ref={name} placeholder="Name" />
            </div>
            <div>
              <label htmlFor="amount">Payment Amount $</label>
              <input type="number" name="amount" ref={amount} placeholder="Payment Amount $" />
            </div>
            <div>
            <label htmlFor="amount">Year: </label>
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

            <button onClick={e =>AddPayment (e)}>Add Payment</button>
          </form>
        </React.Fragment>
      );
 }


export default AddPaymentForm;