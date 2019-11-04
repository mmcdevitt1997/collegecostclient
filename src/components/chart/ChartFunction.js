import React, { useRef, useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar"
import ApiManger from "../../modules/APIManager"

function chartData (amount, color, year) {
    this.name = name
    this.color = color
    this.year = year
    name = amount
}


const getCost = () => {
    return ApiManger.chartdataAll(1).then(
        



    )
}






// [
//     {
//         "id": 1,
//         "name": "year 1",
//         "yearly_balance": 0,
//         "payments": [],
//         "costs": []
//     },
//     {
//         "id": 2,
//         "name": "year 2",
//         "yearly_balance": 804,
//         "payments": [
//             {
//                 "id": 1,
//                 "amount": "200.00",
//                 "color": "hsl(54, 70%, 50%)",
//                 "name": "200",
//                 "year": {
//                     "url": "http://localhost:8000/years/2",
//                     "name": "year 2",
//                     "year": 2,
//                     "college": {
//                         "url": "http://localhost:8000/colleges/1",
//                         "name": "test",
//                         "numberofyears": 4,
//                         "user": "http://localhost:8000/users/2"
//                     }
//                 }
//             },
//             {
//                 "id": 2,
//                 "amount": "200.00",
//                 "color": "hsl(54, 70%, 50%)",
//                 "name": "200",
//                 "year": {
//                     "url": "http://localhost:8000/years/2",
//                     "name": "year 2",
//                     "year": 2,
//                     "college": {
//                         "url": "http://localhost:8000/colleges/1",
//                         "name": "test",
//                         "numberofyears": 4,
//                         "user": "http://localhost:8000/users/2"
//                     }
//                 }
//             },
//             {
//                 "id": 3,
//                 "amount": "202.00",
//                 "color": "hsl(54, 70%, 50%)",
//                 "name": "202",
//                 "year": {
//                     "url": "http://localhost:8000/years/2",
//                     "name": "year 2",
//                     "year": 2,
//                     "college": {
//                         "url": "http://localhost:8000/colleges/1",
//                         "name": "test",
//                         "numberofyears": 4,
//                         "user": "http://localhost:8000/users/2"
//                     }
//                 }
//             },
//             {
//                 "id": 4,
//                 "amount": "202.00",
//                 "color": "hsl(54, 70%, 50%)",
//                 "name": "202",
//                 "year": {
//                     "url": "http://localhost:8000/years/2",
//                     "name": "year 2",
//                     "year": 2,
//                     "college": {
//                         "url": "http://localhost:8000/colleges/1",
//                         "name": "test",
//                         "numberofyears": 4,
//                         "user": "http://localhost:8000/users/2"
//                     }
//                 }
//             }
//         ],
//         "costs": []
//     },
//     {
//         "id": 3,
//         "name": "year 3",
//         "yearly_balance": 0,
//         "payments": [],
//         "costs": []
//     },
//     {
//         "id": 4,
//         "name": "year 4",
//         "yearly_balance": 0,
//         "payments": [],
//         "costs": []
//     }
// ]