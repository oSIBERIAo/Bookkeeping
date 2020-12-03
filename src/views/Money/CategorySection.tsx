import styled from "styled-components"

const CategorySection = styled.section`
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
export { CategorySection }
