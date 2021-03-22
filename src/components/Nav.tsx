import styled from "styled-components"
import { NavLink } from "react-router-dom"
import React from "react"
import { Icon } from "components/Icon"

const NavWrapper = styled.nav`
    width: 100%;
    height: 5.5rem;
    .navi {
        background-color: white;
        backdrop-filter: blur(5px);
        line-height: 24px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
        position: fixed;
        width: 100%;
        height: 5.5rem;
        bottom: 0;
    }
    > ul {
        display: flex;
        padding: 5px 0 0 0;
        > li {
            font-size: 10px;
            width: 33.333%;
            margin-top: 6px;
            > a {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #d3cfea;
                padding-top: 10px;
                .icon {
                    width: 30px;
                    height: 30px;
                }
                &.selected {
                    color: #0d0e56;
                }
            }
            > a:not(.money) {
                .icon {
                    opacity: 0.2;
                }
                &.selected {
                    .icon {
                        opacity: 1;
                    }
                }
            }
            .money {
                padding-top: 0;
                .icon {
                    height: 50px;
                    width: 50px;
                }
            }
        }
    }
`

const Nav = () => {
    return (
        <NavWrapper className="clearfix">
            <ul className="navi">
                <li>
                    <NavLink to="/detail" activeClassName="selected">
                        <Icon name={"detail"} />
                        明细
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name={"tag"} />
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/money"
                        activeClassName="selected"
                        className="money"
                    >
                        <Icon name={"money"} />
                        {/*记账🧾*/}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name={"statistics"} />
                        统计
                    </NavLink>
                </li>
                <li>
                    <NavLink to="profile" activeClassName="selected">
                        <Icon name={"tips"} />
                        理财
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export { Nav }
