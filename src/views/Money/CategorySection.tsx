import styled from "styled-components"
import React from "react"

const Wrapper = styled.section`
    ul {
        display: flex;
        background-color: #f6f6f6;
        :not(.selected) {
            box-shadow: inset 4px 4px 24px 10px drgba(0, 0, 0, 0.02),
                inset -4px -4px 24px 10px rgba(0, 0, 0, 0.02);
        }
        li {
            width: 50%;
            text-align: center;
            padding: 10px 0;
            position: relative;
            &.selected {
                font-size: 20px;
                color: #472fc8;
                background-color: white;
                border-bottom-right-radius: 10px;
                border-bottom-left-radius: 10px;
            }
            //&.selected::after {
            //    content: "";
            //    display: block;
            //    height: 3px;
            //    background: #472fc8;
            //    position: absolute;
            //    bottom: 0;
            //    width: 80%;
            //    left: 10%;
            //}
        }
    }
`

type Props = {
    value: string
    onChange: (value: string) => void
}

const CategorySection: React.FC<Props> = (props) => {
    const categoryMap: { [index: string]: string } = {
        "-": "支出",
        "+": "收入",
    }

    const category = props.value
    const setCategory = props.onChange

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
