import React from "react"
import { Router, Route } from "react-router-dom"
import NavBar from "../src/components/nav/NavBar"
import ApplicationViews from "./components/ApplicationViews"


const App = () => {
    return (
        <React.Fragment>
            <Route render={props => (
                <NavBar {...props} />

            )} />
          <ApplicationViews />
        </React.Fragment>
    )
}

export default App

