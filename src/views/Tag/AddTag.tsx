import React, { ChangeEvent, useState } from "react"
import { Layout } from "../../components/Layout"
import { useTags } from "../../hooks/useTags"
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
    color: #0d0e56;
    font-weight: bold;
`

const InputWrapper = styled.div`
    padding: 6px 14px;
    background: white;
    margin: 8px 20px 20px;
    border-radius: 10px;
    span {
        color: #666;
        margin-right: 16px;
        white-space: nowrap;
    }
    .radio {
        padding: 10px;
        display: inline-block;
        label {
            padding: 20px;
        }
        input {
            margin: 8px 10px 10px 24px;
            position: relative;
        }
        input[type="radio"] + label::before {
            content: "";
            display: inline-block;
            vertical-align: middle;
            font-size: 20px;
            width: 1em;
            height: 1em;
            margin-right: 0.4em;
            border-radius: 50%;
            border: 1px solid #472fc8;
            text-indent: 0.15em;
            padding: 0.1em;
            opacity: 0.5;
            /*注意这里有个padding，这是为了裁切背景色的时候
             让内容和边框留个间隙，这样就形成了Radio的外观*/
        }
        input[type="radio"]:checked + label::before {
            background-color: #472fc8;
            background-clip: content-box;
            opacity: 1;
        }
        input[type="radio"] {
            position: absolute;
            opacity: 0; /*完全透明*/
        }
    }
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

const AddTag: React.FC = () => {
    const { addTag } = useTags()

    type Tag = { name: string; icon: string; category: string }
    const [newTag, setNewTag] = useState<Tag>({
        icon: "",
        name: "",
        category: "-",
    })

    const onClickBack = () => {
        window.history.back()
    }

    const tagContent = () => (
        <div>
            <InputWrapper>
                <Input
                    type="text"
                    label="ICON:"
                    placeholder="请输入 emoji 表情 如：😊"
                    value={newTag.icon}
                    onChange={(e) => {
                        setNewTag({ ...newTag, icon: e.target.value })
                    }}
                />
            </InputWrapper>
            <InputWrapper>
                <Input
                    type="text"
                    label="标签名:"
                    placeholder="请输入标签名"
                    value={newTag.name}
                    onChange={(e) => {
                        setNewTag({ ...newTag, name: e.target.value })
                    }}
                />
            </InputWrapper>
            <InputWrapper>
                <span>标签分类：</span>
                <div
                    className="radio"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        newTag.category = e.target.value
                    }}
                >
                    <input
                        type="radio"
                        id="+"
                        name="category"
                        value={"+"}
                        defaultChecked={newTag.category === "+"}
                    />
                    <label htmlFor="+">收入</label>
                    <input
                        type="radio"
                        id="-"
                        name="category"
                        value={"-"}
                        defaultChecked={newTag.category === "-"}
                    />
                    <label htmlFor="-">支出</label>
                </div>
            </InputWrapper>

            <MyCenter>
                <Space />
                <Button
                    onClick={() => {
                        addTag(newTag)
                        onClickBack()
                    }}
                >
                    💾
                </Button>
            </MyCenter>
        </div>
    )

    return (
        <Layout>
            <Topbar>
                <Icon name="left" onClick={onClickBack} />
                <span>添加标签</span>
                <span />
            </Topbar>
            {newTag ? tagContent() : <Center>"Tag 不存在"</Center>}
        </Layout>
    )
}

export { AddTag }
