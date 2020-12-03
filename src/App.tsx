import React from "react"
// import logo from './logo.svg'
import {
    HashRouter as Router,
    Switch,
    Route,
    // Link,
    Redirect,
} from "react-router-dom"
import "./App.css"
// eslint-disable-next-line

import { Tags } from "./views/Tags"
import { Money } from "./views/Money"
import { Statistics } from "./views/Statistics"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags">
                    <Tags />
                </Route>
                <Route path="/money">
                    <Money />
                </Route>
                <Route path="/statistics">
                    <Statistics />
                </Route>
                <Redirect exact from="/" to="Money" />
                <Route path="/*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    )
}

function NoMatch() {
    return <h2>NoMatch 404</h2>
}

export default App
