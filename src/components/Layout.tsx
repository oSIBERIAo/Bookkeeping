import React from "react"
import { Nav } from "./Nav"
import styled from "styled-components"

const Wrapper = styled.div`
    //border: 1px solid palevioletred;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
const Main = styled.div`
    flex-grow: 1;
    overflow: auto;
`

type Props = {
  children: React.ReactNode
  className?: string
}

const Layout = (props: Props) => {
    return (
        <Wrapper>
          <Main className={props.className}>{props.children}</Main>
          <Nav />
        </Wrapper>
    )
}
export { Layout }
