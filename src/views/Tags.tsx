import React, { useState } from "react"
import { Layout } from "../components/Layout"
import styled from "styled-components"
import { Icon } from "../components/Icon"
import { useTags } from "../hooks/useTags"
import { Link } from "react-router-dom"
import { Center } from "../components/Center"
import { Space } from "../components/Space"
import { CategorySection } from "./Money/CategorySection"
import { Title } from "../components/Title"

const TagList = styled.ol`
    margin: 0 20px;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
    li {
        //outline: 1px solid red;
        display: flex;
        padding: 12px 16px 12px 0;
        margin-left: 16px;
        position: relative;
        justify-content: space-between;
        align-items: center;
        svg {
            height: 1rem;
            width: 1rem;
        }
        :before {
            position: absolute;
            content: "";
            display: block;
            bottom: 0;
            height: 1px;
            width: 90%;
            left: 5%;
            background-color: #f1f4ff;
        }
    }

    button {
        background-color: white;
        display: inline-block;
        border-radius: 18px;
        padding: 3px 10px;
        font-size: 20px;
        margin: 5px 12px 2px;
        border: 4px solid white;
        box-shadow: 0 3px 14px 0 rgba(233, 231, 241, 0.5);
        .icon {
            position: relative;
            top: 4px;
        }
    }
`
const MyCenter = styled(Center)`
    font-size: 30px;
    a {
        background-color: white;
        padding: 5px 12px;
        border-radius: 40px;
        position: relative;
        box-shadow: 0 3px 14px 0 rgba(233, 231, 241, 0.5);
    }
    a:after {
        content: "+";
        color: white;
        font-size: 20px;
        position: absolute;
        top: 48%;
        left: 54%;
        transform: translateX(-50%) translateY(-50%);
    }
`
const CategoryWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0);
    margin-bottom: 10px;
    > section {
        padding: 0 0 10px 0;
        width: 90%;
        margin: auto;
        > ul {
            background-color: rgba(0, 0, 0, 0);
            border-radius: 40px;
            > li {
                line-height: 20px;
                font-size: 14px;
                padding: 10px;
                border-radius: 40px;
                color: #0d0e56;
                &.selected {
                    font-size: 18px;
                    border-radius: 40px;
                    color: white;
                    background-color: #472fc8;
                }
            }
        }
    }
`

const Tags = () => {
    const { tags } = useTags()
    const [category, setCategory] = useState<string>("-")

    const selectedTags = tags.filter((t) => t.category === category)

    return (
        <Layout>
            <Title>标签</Title>
            <CategoryWrapper>
                <CategorySection
                    value={category}
                    onChange={(value) => {
                        setCategory(value)
                    }}
                />
            </CategoryWrapper>
            <TagList>
                {selectedTags.map((tag) => (
                    <Link to={"/editTags/" + tag.id} key={tag.id}>
                        <li>
                            <span className="oneLine">
                                {tag.icon}&nbsp;&nbsp;&nbsp;
                                {tag.name}
                            </span>
                            <Icon name="right" />
                        </li>
                    </Link>
                ))}
            </TagList>
            <MyCenter>
                <Space />
                <Link to={"/addTag/"}>🏷️</Link>
            </MyCenter>
        </Layout>
    )
}
export { Tags }
