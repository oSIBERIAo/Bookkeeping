import styled from "styled-components"
import React, { useState } from "react"

const Wrapper = styled.section`
    ul {
        font-size: 24px;
        display: flex;
        background-color: #c4c4c4;
        li {
            width: 50%;
            text-align: center;
            padding: 10px 0;
            position: relative;
            &.selected::after {
                content: "";
                display: block;
                height: 3px;
                background: #666666;
                position: absolute;
                bottom: 0;
                width: 100%;
                left: 0;
            }
        }
    }
`

const CategorySection: React.FC = () => {
    const categoryMap: { [index: string]: string } = {
        "-": "支出",
        "+": "收入",
    }

    const [category, setCategory] = useState("-")

    return (
        <Wrapper>
            <ul>
                {Object.keys(categoryMap).map((key) => (
                    <li
                        key={key}
                        className={category === key ? "selected" : ""}
                        onClick={() => {
                            setCategory(key)
                        }}
                    >
                        {categoryMap[key]}
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}

export { CategorySection }
