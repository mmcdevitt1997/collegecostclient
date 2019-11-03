// import React, { useRef, useEffect, useState } from "react";
// import AddCostForm from "./costform"
// import ApiManger from "../../modules/APIManager"


// const CostStream = props => {

// const [costData, setCost] = useState([]);

// const getCost = () => {
//     return ApiManger.chartdataAll( props.match.params.collegeId).then(setCost)
// }
//    useEffect(() => {
//     getCost();

//   }, []);

//   {costData.map(cost=> {


// return (
//         <>
//           <h1>College Cost </h1>
//           <div>
//           <AddCostForm {...props} />
//           </div>
//              return (

//               <div key={cost.year} className="card">
//                   <h3>{cost.name}</h3>
//                 <ul>
//                   <li> college ${}</li>
//                   <br />
//                 </ul>
//               </div>

//                )


//         </>
//           )
//   })
//         }
//     }
// export default CostStream;

