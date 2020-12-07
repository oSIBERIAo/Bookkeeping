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
`

const Tags = () => {
    const { tags, addTag } = useTags()

    return (
        <Layout>
            <TagList>
                {tags.map((tag) => (
                    <Link to={"/tags/" + tag.id} key={tag.id}>
                        <li>
                            <span className="oneLine">{tag.name}</span>
                            <Icon name="right" />
                        </li>
                    </Link>
                ))}
            </TagList>
            <Center>
                <Space />
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>
    )
}
export { Tags }
