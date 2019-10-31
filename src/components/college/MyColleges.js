import React, { useState, useEffect } from "react";
import ApiManger from "../../modules/APIManager"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"


const MyColleges = props => {
    const [myColleges, setMyColleges] = useState([]);
    const { isAuthenticated } = useSimpleAuth();

    const getMyColleges = () => {
     return ApiManger.getAll("colleges").then(setMyColleges)
    }
    const deleteMyCollege = id => {
        ApiManger.delete(id)
    }
    const updateMyCollege = (id) => {
        ApiManger.put("college", id).then(getMyColleges)
    }
    useEffect(() => {
        getMyColleges();
      }, []);

      return (
        <>
          <h1>My college</h1>
          <button onClick={() => {props.history.push("/addcollege")}}> Add College</button>
          {myColleges.map(myCollege=> {
            return (

              <div key={myCollege.id} className="card">
                  <h3>{myCollege.name}</h3>
                <ul>
                  <li> Total Cost ${myCollege.college_total_cost}</li>
                  <li> Total Payment ${myCollege.college_total_payment}</li>
                  <li> Total balance ${myCollege.college_balance}</li>
                  <br />
                  <button onClick={() => deleteMyCollege(myCollege.id)}>
                    Delete
                  </button>
                  <button onClick={() => {props.history.push(`/costpage${myCollege.id}`)}}>College Graph</button>
                </ul>
              </div>
            );
          })}
        </>
      );

}
export default MyColleges;


