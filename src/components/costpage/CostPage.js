import React, { useState, useEffect } from "react";
import ApiManger from "../../modules/APIManager"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import BarChart from "./BarChart"

const CostPage = props => {


    return (
        <>
          <h1>Charts</h1>
            return (
              <div className="Chart">
                <BarChart  {...props} />

              </div>
            );
          })
        </>
      );
    };

    export default CostPage;