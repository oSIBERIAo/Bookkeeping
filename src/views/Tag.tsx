import React from "react"
import { Layout } from "../components/Layout"
import { useTags } from "../useTags"
import { useParams } from "react-router-dom"
import { Icon } from "../components/Icon"
import { Button } from "../components/Button"
import styled from "styled-components"
import { Input } from "../components/Input"

const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    padding: 14px;
    background: white;
`

const Tag: React.FC = () => {
    const { findTag } = useTags()
    let { id } = useParams<{ id: string }>()
    const tag = findTag(parseInt(id))
    return (
        <Layout>
            <Topbar>
                <Icon name="left" />
                <span>编辑标签</span>
                <span />
            </Topbar>
            <div>
                <div>{tag.name}</div>
                <Input label="备注" />
            </div>
            <div>
                <Button>新增标签</Button>
            </div>
        </Layout>
    )
}

export { Tag }
