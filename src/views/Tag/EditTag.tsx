import React, { ChangeEvent } from "react"
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

const MyCenter = styled(Center)`
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    Button {
        font-size: 25px;
        padding: 5px 12px;
        border-radius: 40px;
    }
`

const EditTag: React.FC = () => {
    const { findTag, updateTag, deleteTag } = useTags()
    let { id } = useParams<{ id: string }>()
    const tag = findTag(parseInt(id))

    const onClickBack = () => {
        window.history.back()
    }

    type Tag = {
        icon: string
        id: number
        name: string
        category: string
    }

    const tagContent = (tag: Tag) => (
        <div>
            <InputWrapper>
                <Input
                    type="text"
                    label="ICON:"
                    placeholder="请输入 emoji 表情 如：😊"
                    value={tag.icon}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        updateTag({ ...tag, icon: e.target.value })
                    }}
                />
            </InputWrapper>
            <InputWrapper>
                <Input
                    type="text"
                    label="标签名:"
                    placeholder="请输入标签名"
                    value={tag.name}
                    onChange={(e) => {
                        updateTag({ ...tag, name: e.target.value })
                    }}
                />
            </InputWrapper>
            <MyCenter>
                <Space />
                <Button
                    onClick={() => {
                        deleteTag(tag)
                        onClickBack()
                    }}
                >
                    🗑
                </Button>
                <br />
                <Button onClick={onClickBack}>💾</Button>
            </MyCenter>
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

export { EditTag }
