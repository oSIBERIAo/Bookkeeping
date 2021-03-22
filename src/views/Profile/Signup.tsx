import React, { useState } from "react"
import { Layout } from "../../components/Layout"
import { useTags } from "../../hooks/useTags"
import { Icon } from "../../components/Icon"
// import { Button } from "../../components/Button"
import styled from "styled-components"
// import { Input } from "../../components/Input"
import { Center } from "../../components/Center"
import { Space } from "../../components/Space"

import { Form, Input, Button, Checkbox } from "antd"

const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    padding: 14px;
    color: #0d0e56;
    font-weight: bold;
`
const FromWrapper = styled.div`
    //margin: 10px;
    //display: flex;
    //justify-content: center;
    width: 90%;
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

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
}

const Signup: React.FC = () => {
    const { addTag } = useTags()

    type Tag = { username: string; password: string; checkPass: string }
    const [user, setUser] = useState<Tag>({
        username: "",
        password: "",
        checkPass: "",
    })

    const onClickBack = () => {
        window.history.back()
    }

    const tagContent = () => (
        <div>
            {/*<InputWrapper>*/}
            {/*    <Input*/}
            {/*        type="text"*/}
            {/*        label="用户名:"*/}
            {/*        placeholder="请输入 用户名 表情 如：Mister"*/}
            {/*        value={user.username}*/}
            {/*        onChange={(e) => {*/}
            {/*            setUser({ ...user, username: e.target.value })*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</InputWrapper>*/}

            <MyCenter>
                <Space />
                <Button
                    onClick={() => {
                        // addTag(newTag)
                        onClickBack()
                    }}
                >
                    💾
                </Button>
            </MyCenter>
        </div>
    )
    const onFinish = (values: any) => {
        console.log("Success:", values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo)
    }

    return (
        <Layout>
            <Topbar>
                <Icon name="left" onClick={onClickBack} />
                <span>注册用户</span>
                <span />
            </Topbar>
            <FromWrapper>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve()
                                    }

                                    return Promise.reject(
                                        new Error(
                                            "The two passwords that you entered do not match!"
                                        )
                                    )
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </FromWrapper>
        </Layout>
    )
}

export { Signup }
