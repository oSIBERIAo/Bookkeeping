import React from "react"
import { Layout } from "../components/Layout"
import styled from "styled-components"
import { Icon } from "../components/Icon"
import { useTags } from "../useTags"
import { Link } from "react-router-dom"

const TagList = styled.ol`
    li {
        border-bottom: 1px solid #989898;
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

const Button = styled.button`
    font-size: 18px;
    border: none;
    padding: 8px 12px;
    background: #7c7c7c;
    border-radius: 4px;
    color: white;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Space = styled.div`
    height: 60px;
`

const Tags = () => {
    const { tags } = useTags()

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
                <Button>新增标签</Button>
            </Center>
        </Layout>
    )
}
export { Tags }
