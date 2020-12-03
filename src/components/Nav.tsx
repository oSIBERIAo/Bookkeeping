import styled from "styled-components"
import { NavLink } from "react-router-dom"
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
            > a {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                .icon {
                    width: 30px;
                    height: 30px;
                }
                &.selected {
                    color: #272c35;
                    font-weight: bold;
                    .icon {
                        width: 35px;
                        height: 35px;
                    }
                }
            }
        }
    }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name={"tag"} />
                        标签🏷️
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name={"money"} />
                        记账🧾
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name={"statistics"} />
                        统计📈
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export { Nav }
