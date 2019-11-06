import React, { useRef, useEffect, useState } from "react";

import Chart from "./BarChart"

const ChartPage = props => {


    return (
        <>
          <h1>Charts</h1>

              <div className="Chart">
                <Chart  {...props} />

              </div>
       

        </>
      );
    };

    export default ChartPage;