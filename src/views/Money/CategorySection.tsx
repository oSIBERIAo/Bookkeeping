import styled from "styled-components"
import React from "react"

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

type Props = {
    value: string
    onChange: (value: string) => void
}

const CategorySection: React.FC<Props> = (props) => {
    const categoryMap: { [index: string]: string } = {
        "-": "支出",
        "+": "收入",
    }

    // const [category, setCategory] = useState("-")
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
