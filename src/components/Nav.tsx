import styled from "styled-components"
import { Link } from "react-router-dom"
import React from "react"
import { Icon } from "components/Icon"

const NavWrapper = styled.nav`
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    > ul {
        display: flex;
        padding: 5px 0 0 0;
        > li {
            font-size: 10px;
            width: 33.333%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            > .icon {
                width: 30px;
                height: 30px;
            }
        }
    }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name={"tag"} />
                    <Link to="/tags">标签🏷️</Link>
                </li>
                <li>
                    <Icon name={"money"} />
                    <Link to="/money">记账🧾</Link>
                </li>
                <li>
                    <Icon name={"statistics"} />
                    <Link to="/statistics">统计📈</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export { Nav }
