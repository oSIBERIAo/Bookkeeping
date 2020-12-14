import React from "react"
import { Layout } from "../components/Layout"
import styled from "styled-components"
import { Icon } from "../components/Icon"
import { useTags } from "../hooks/useTags"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Center } from "../components/Center"
import { Space } from "../components/Space"

const TagList = styled.ol`
    background-color: white;
    li {
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

const Tags = () => {
    const { tags, addTag } = useTags()

    return (
        <Layout>
            <TagList>
                {tags.map((tag) => (
                    <Link to={"/tags/" + tag.id} key={tag.id}>
                        <li>
                            <span className="oneLine">
                                {tag.name.split("@")[0]}&nbsp;&nbsp;&nbsp;
                                {tag.name.split("@")[1]}
                            </span>
                            <Icon name="right" />
                        </li>
                    </Link>
                ))}
            </TagList>
            <Center>
                <Space />
                <Button onClick={addTag}>
                    <Icon name={"money"} />
                </Button>
            </Center>
        </Layout>
    )
}
export { Tags }
