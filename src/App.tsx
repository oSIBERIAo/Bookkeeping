import React from "react"
// import logo from './logo.svg'
import {
    HashRouter as Router,
    Switch,
    Route,
    // Link,
    Redirect,
} from "react-router-dom"

import "antd/dist/antd.less"
import "./App.css"
// eslint-disable-next-line

import { Money } from "./views/Money"
import { Tags } from "./views/Tags"
import { EditTag } from "./views/Tag/EditTag"
import { AddTag } from "./views/Tag/AddTag"
import { Detail } from "./views/Detail"
import { Statistics } from "./views/Statistics"

import { Profile } from "./views/Profile"
import { Signup } from "./views/Profile/Signup"
import { Signin } from "./views/Profile/Signin"

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/tags">
                    <Tags />
                </Route>
                <Route exact path="/editTags/:id">
                    <EditTag />
                </Route>
                <Route exact path="/addTag">
                    <AddTag />
                </Route>
                <Route exact path="/money">
                    <Money />
                </Route>
                <Route exact path="/detail">
                    <Detail />
                </Route>
                <Route exact path="/statistics">
                    <Statistics />
                </Route>

                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/signin">
                    <Signin />
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
