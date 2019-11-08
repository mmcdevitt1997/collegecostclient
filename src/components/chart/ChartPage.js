import React, { useEffect, useState } from "react";
import ApiManger from "../../modules/APIManager";
import Chart from "./BarChart";
import "./Chart.css";
const ChartPage = props => {
  const [myColleges, setMyColleges] = useState([]);

  const getMyColleges = () => {
    return ApiManger.get("colleges", props.match.params.collegeId).then(
      setMyColleges
    );
  };
  useEffect(() => {
    getMyColleges();
  }, []);
  return (
    <>
      <h1 className="chartTitle">{myColleges.name} Chart</h1>
      <div className="chartData">
        <h3 className="redText">Total Cost: ${myColleges.college_total_cost}</h3>
        <h3 className="blueText">
          Total Payment: ${myColleges.college_total_payment}
        </h3>
        <h3 className="greenText">
          Total Balance: ${myColleges.college_balance}
        </h3>
      </div>

      <div className="Chart">
        <Chart {...props} />
      </div>
    </>
  );
};

export default ChartPage;
