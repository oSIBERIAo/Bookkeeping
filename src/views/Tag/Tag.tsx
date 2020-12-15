import React from "react"
import { Layout } from "../../components/Layout"
import { useTags } from "../../hooks/useTags"
import { useParams } from "react-router-dom"
import { Icon } from "../../components/Icon"
import { Button } from "../../components/Button"
import styled from "styled-components"
import { Input } from "../../components/Input"
import { Center } from "../../components/Center"
import { Space } from "../../components/Space"

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
    const { findTag, updateTag, deleteTag } = useTags()
    let { id } = useParams<{ id: string }>()
    const tag = findTag(parseInt(id))

    const onClickBack = () => {
        window.history.back()
    }

    const tagContent = (tag: { id: number; name: string }) => (
        <div>
            <InputWrapper>
                <Input
                    type="text"
                    label="标签名"
                    placeholder="标签名"
                    value={tag.name}
                    onChange={(e) => {
                        updateTag({ id: tag.id, name: e.target.value })
                    }}
                />
            </InputWrapper>
            <Center>
                <Space />
                <Button
                    onClick={() => {
                        deleteTag(tag)
                    }}
                >
                    删除标签
                </Button>
            </Center>
        </div>
    )

    return (
        <Layout>
            <Topbar>
                <Icon name="left" onClick={onClickBack} />
                <span>编辑标签</span>
                <span />
            </Topbar>
            {tag ? tagContent(tag) : <Center>"Tag 不存在"</Center>}
        </Layout>
    )
}

export { Tag }
