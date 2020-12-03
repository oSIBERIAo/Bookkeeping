import styled from "styled-components"

const TagsSection = styled.section`
    background-color: #fff;
    padding: 12px 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    ol {
        margin: 0 -12px;
        li {
            background-color: #d9d9d9;
            display: inline-block;
            border-radius: 18px;
            padding: 3px 16px;
            font-size: 14px;
            margin: 4px 12px;
        }
    }
    button {
        background: none;
        border: none;
        padding: 2px 4px;
        border-bottom: 1px solid #666;
        margin-top: 8px;
        color: #666;
    }
`
export { TagsSection }
