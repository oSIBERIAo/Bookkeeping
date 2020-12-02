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
import styled from "styled-components"
import { Nav } from "./components/Nav"

// eslint-disable-next-line
const Wrapper = styled.div`
  border: 1px solid palevioletred;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  //border: 1px solid darkslategray;
  flex-grow: 1;
  overflow: auto;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  )
}

function NoMatch() {
  return <h2>NoMatch 404</h2>
}

function Statistics() {
  return <h2>Statistics</h2>
}

function Tags() {
  return <h2>Tags</h2>
}

function Money() {
  return <h2>Money</h2>
}

export default App
