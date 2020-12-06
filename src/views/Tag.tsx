import React from "react"
import { Layout } from "../components/Layout"
import { useTags } from "../useTags"
import { useParams } from "react-router-dom"
import { Icon } from "../components/Icon"
import { Button } from "../components/Button"
import styled from "styled-components"
import { Input } from "../components/Input"
import { Center } from "../components/Center"
import { Space } from "../components/Space"

const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    padding: 14px;
    background: white;
`

const InputWrapper = styled.div`
    padding: 6px 14px;
    background: white;
    margin-top: 8px;
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
            <InputWrapper>
                <Input
                    type="text"
                    label="标签名"
                    placeholder="标签名"
                    value={tag.name}
                />
            </InputWrapper>
            <Center>
                <Space />
                <Button>删除标签</Button>
            </Center>
        </Layout>
    )
}

export { Tag }