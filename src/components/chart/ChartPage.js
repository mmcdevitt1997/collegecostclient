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
        <p className="redText">Total Cost: ${myColleges.college_total_cost}</p>
        <p className="blueText">
          Total Payment: ${myColleges.college_total_payment}
        </p>
        <p className="greenText">
          Total Balance: ${myColleges.college_balance}
        </p>
      </div>

      <div className="Chart">
        <Chart {...props} />
      </div>
    </>
  );
};

export default ChartPage;
