import styled from "styled-components"
import { Link } from "react-router-dom"
import React from "react"

require("icons/money.svg")
require("icons/statistics.svg")
require("icons/tag.svg")

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
          <svg className="icon">
            <use xlinkHref="#tag" />
          </svg>
          <Link to="/tags">标签🏷️</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money" />
          </svg>
          <Link to="/money">记账🧾</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#statistics" />
          </svg>
          <Link to="/statistics">统计📈</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export { Nav }
