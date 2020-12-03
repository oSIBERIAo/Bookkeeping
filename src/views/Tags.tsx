import React from "react"
import { Layout } from "../components/Layout"
import styled from "styled-components"

const TagsSection = styled.section`
    background-color: #fff;
    padding: 12px 16px;
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
const NotesSection = styled.section`
    background-color: #f5f5f5;
    padding: 0 16px;
    font-size: 14px;
    label {
        display: flex;
        align-items: center;
        span {
            color: #666;
            margin-right: 16px;
            white-space: nowrap;
        }
        input {
            display: block;
            width: 100%;
            height: 40px;
            border: none;
            background: none;
        }
    }
`
const NumberPadSection = styled.section``

const Tags = () => {
    return (
        <Layout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label htmlFor="">
                    <span>备注</span>
                    <input type="text" placeholder={"  请在这里添加备注"} />
                </label>
            </NotesSection>
            <NumberPadSection>
                <div>100</div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    )
}
export { Tags }
