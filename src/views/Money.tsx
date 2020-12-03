import React from "react"
import { Layout } from "../components/Layout"
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
const NumberPadSection = styled.section`
    display: flex;
    flex-direction: column;
    .output {
        background-color: white;
        font-size: 36px;
        line-height: 72px;
        text-align: right;
        padding: 0 16px;
        box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
            inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
    }
    .pad {
        button {
            float: left;
            width: 25%;
            height: 64px;
            &.ok {
                float: right;
                height: 128px;
            }
            &.zero {
                width: 50%;
            }
        }
    }
`

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`
const Money = () => {
    return (
      <MyLayout>
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
            <CategorySection>
                <ul>
                    <li className={"selected"}>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div className={"output"}>100</div>
                <div className={"pad clearfix"}>
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
                    <button className={"ok"}>OK</button>
                    <button className={"zero"}>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
      </MyLayout>
    )
}
export { Money }
