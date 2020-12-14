import React from "react"
import { Nav } from "./Nav"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f1f4ff;
`
const Main = styled.div`
    flex-grow: 1;
    overflow: auto;
    min-height: calc(100vh - 5.5rem);
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
