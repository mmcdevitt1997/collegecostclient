import React, { useRef, useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager";

const AddPaymentForm = props => {
  const amount = useRef();
  const paymenttype =useRef()
  const year = useRef()
  const [paymentType, setpaymenttype] = useState([]);
  const [yearState, setyear] = useState([]);

  const addPayment = e => {
    e.preventDefault();
    const newPaymentInfo = {
      year: year.current.value,
      amount: parseInt(amount.current.value),
      paymenttype: paymenttype.current.value
    };
    ApiManger.post("payments", newPaymentInfo).then(() => {
      props.history.push("/");
    });
  };

  const getPaymentTypes = () => {
    ApiManger.getAll("paymenttypes").then(response => {
      setpaymenttype(response);
    });
}
    const getYears = () => {
      ApiManger.chartdata(props.match.params.collegeId).then(response => {
        setyear(response.years);
      });
    };
    useEffect(() => {
      getPaymentTypes();
      getYears();
    }, []);

    return (
      <React.Fragment>
        <form>
        <div>
            <label htmlFor="amount">Payment Amount $</label>
            <input
              type="number"
              name="Amount"
              ref={amount}
              placeholder="Payment Amount"
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
            <select type="paymenttype" name="paymenttype" ref={paymenttype}>
            <option>Select Payment Type</option>
              {paymentType.map(paymenttype=> {
                return (
                  <option key={paymenttype.id} id={paymenttype.id} value={paymenttype.id}>
                    {paymenttype.name}
                  </option>
                );
              })}
            </select>
            </div>

          <button onClick={e => addPayment(e)}>Add Payment</button>
        </form>
      </React.Fragment>
    );
  };

export default AddPaymentForm;


