import React, { useRef, useEffect, useState } from "react";
import APIManger from "../../modules/APIManager";

const EditPaymentForm = props => {
  const [paymentEdit, setPaymentFields] = useState([]);
  const name = useRef();

  const amount = useRef();

  const getPayment = () => {
    APIManger.get("payments", props.match.params.collegeId).then(response => {
      setPaymentFields(response);
    });
  };



  const handleUpdate = e => {
    e.preventDefault();
    const UpdatePaymentInfo = {
      id: paymentEdit.id,
      name: name.current.value,
      amount: parseInt(amount.current.value),

    };
    APIManger.put("payments", UpdatePaymentInfo).then(() => {
      props.history.push("`/paymentpage/${props.match.params.collegeId}`");
    });
  };




  useEffect(() => {
    getPayment();
  }, []);

  return (
    <>
      <main style={{ textAlign: "center" }}>

          <h1 className="h3 mb-3 font-weight-normal">Edit Form</h1>

              <form  onSubmit={handleUpdate}>
                <fieldset>
                  <label htmlFor="inputAddress"> Payment Name </label>
                  <input
                    ref={name}
                    type="text"
                    name="address"
                    className="form-control"
                    defaultValue={paymentEdit.name}
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
                    defaultValue={paymentEdit.amount}
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

export default EditPaymentForm;
