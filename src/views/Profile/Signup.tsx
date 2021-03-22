import React from "react"
import { Layout } from "../../components/Layout"
import { Icon } from "../../components/Icon"
import styled from "styled-components"

import { Form, Input, Button, Checkbox } from "antd"
import "antd/es/form/style/index.css" // 手动按需引入input样式
import "antd/es/input/style/index.css"
import "antd/es/button/style/index.css"
import "antd/es/checkbox/style/index.css"

const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    padding: 14px;
    color: #0d0e56;
    font-weight: bold;
`
const FromWrapper = styled.div`
    margin: 30px;

    form {
        input {
            line-height: 2.5;
            //border-radius: 20px;
        }
        button {
            font-weight: 800;
            height: 42px;
            padding: 4px 21px;
            border-radius: 21px;
            margin-left: 50%;
            transform: translate(-50%, 0px);
            background: #472fc8;
            border-color: #472fc8;
        }
        .ant-checkbox-checked .ant-checkbox-inner {
            background: #472fc8;
            border-color: #472fc8;
        }
        input,
        .ant-input-affix-wrapper {
            border-radius: 10px;
            border-color: white;
        }
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
    // type Tag = { username: string; password: string; checkPass: string }
    // const [user, setUser] = useState<Tag>({
    //     username: "",
    //     password: "",
    //     checkPass: "",
    // })

    const onClickBack = () => {
        window.history.back()
    }

    const onFinish = (values: any) => {
        console.log("Success:", values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo)
    }
    const rules = {
        username: [
            {
                required: true,
                message: "Please input your username!",
            },
        ],
        password: [
            {
                required: true,
                message: "Please input your password!",
            },
        ],
        confirm: () => {
            return [
                {
                    required: true,
                    message: "Please confirm your password!",
                },
                // @ts-ignore
                ({ getFieldValue }) => ({
                    validator(_: any, value: any) {
                        if (!value || getFieldValue("password") === value) {
                            return Promise.resolve()
                        }

                        return Promise.reject(
                            new Error(
                                "The two passwords that you entered do not match!"
                            )
                        )
                    },
                }),
            ]
        },
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
                        label="用户名"
                        name="username"
                        rules={rules.username}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={rules.password}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={["password"]}
                        hasFeedback
                        rules={rules.confirm()}
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