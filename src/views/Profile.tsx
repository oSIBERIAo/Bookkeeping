import React from "react"
import { Layout } from "../components/Layout"
import { Link } from "react-router-dom"
import { Title } from "../components/Title"

import { axios } from "request/http"
import { url } from "request/api"
import styled from "styled-components"
import { Icon } from "../components/Icon"

import { Modal, message } from "antd"

const List = styled.ol`
    margin: 0 20px;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;

    li {
        //outline: 1px solid red;
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

        :before {
            position: absolute;
            content: "";
            display: block;
            bottom: 0;
            height: 1px;
            width: 90%;
            left: 5%;
            background-color: #f1f4ff;
        }

        .red {
            color: #ff6161;
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

export type Data = {
    idMax: number
    records: []
    tags: []
}
type Key = "idMax" | "records" | "tags"

const Profile = () => {
    const keys = ["records", "tags", "idMax"]

    const setItem = (data: any, e: Key) => {
        if (data === "[]") {
            window.localStorage.setItem(e, "[]")
        }
        if (data?.[e]) {
            console.log("data[e]", data?.[e])
            window.localStorage.setItem(e, String(data[e]))
        }
    }

    const { confirm } = Modal

    const downloadDataConfirm = () => {
        confirm({
            title: "是否下载云端数据并同步到本地？",
            content: "将清除本地数据并下载云端数据",
            onOk() {
                downloadData()
            },
            onCancel() {},
        })
    }
    const downloadData = () => {
        axios
            .get(url.bookkeeping)
            .then((res) => {
                if (res.data) {
                    keys.forEach((e) => {
                        setItem(res.data, e as "idMax" | "records" | "tags")
                    })
                    message.success("同步成功", 3, () => {
                        setTimeout(message.destroy, 3000)
                    })
                }
            })
            .catch((err) => {
                console.log("err", err)
                let msg = "同步失败"
                if (err.response) {
                    msg = err.response.data.msg
                }
                message.error(msg, 3, () => {
                    setTimeout(message.destroy, 3000)
                })
            })
    }

    const uploadDataConfirm = () => {
        confirm({
            title: "是否上传本地数据并同步到云端？",
            content: "将上传本地数据并更新云端数据",
            onOk() {
                uploadData()
            },
            onCancel() {},
        })
    }
    const uploadData = () => {
        let d = new FormData()
        const getItem = (e: string) => {
            return String(window.localStorage.getItem(e))
        }
        keys.forEach((e) => {
            d.append(e, getItem(e))
        })
        axios
            .post(url.update, d)
            .then((response) => {
                if (response.status === 201) {
                    message.success("上传成功", 3, () => {
                        message.destroy()
                    })
                }
            })
            .catch((err) => {
                let msg = "上传失败"
                if (err.response) {
                    msg = err.response.data.msg
                }
                message.error(msg, 3, () => {
                    setTimeout(message.destroy, 3000)
                })
            })
    }

    const clearDataConfirm = () => {
        confirm({
            title: "是否清除本地记账数据？",
            content: "将清除本地记账数据数据",
            onOk() {
                clearData()
            },
            onCancel() {},
        })
    }
    const clearData = () => {
        keys.forEach((e) => {
            setItem("[]", e as "idMax" | "records" | "tags")
        })
        window.localStorage.setItem("idMax", "200")
        message.success("清除成功", 3, () => {
            message.destroy()
        })
    }

    const logoutConfirm = () => {
        confirm({
            title: "是否退出登录？",
            content: "将退出用户登录状态",
            onOk() {
                logout()
            },
            onCancel() {},
        })
    }
    const logout = () => {
        const user = ["user_username", "token", "user_id"]
        user.forEach((e) => {
            window.localStorage.removeItem(e)
        })
        message.success("已退出登录", 3, () => {
            message.destroy()
        })
    }

    return (
        <Layout>
            <Title>个人</Title>
            <br />
            <List>
                <div onClick={downloadDataConfirm}>
                    <li>
                        <span>📥&nbsp;&nbsp;&nbsp; 下载云端数据</span>
                    </li>
                </div>
                <div onClick={uploadDataConfirm}>
                    <li>
                        <span>📤&nbsp;&nbsp;&nbsp; 上传本地数据</span>
                    </li>
                </div>
            </List>
            <br />
            <List>
                <Link to={"/signup"}>
                    <li>
                        <span>🔏&nbsp;&nbsp;&nbsp; 注册</span>
                        <Icon name="right" />
                    </li>
                </Link>
                <Link to={"/signin"}>
                    <li>
                        <span>🔐&nbsp;&nbsp;&nbsp; 登录</span>
                        <Icon name="right" />
                    </li>
                </Link>
            </List>
            <br />
            <List>
                <div onClick={clearDataConfirm}>
                    <li>
                        <span>🆑&nbsp;&nbsp;&nbsp; 清除数据</span>
                    </li>
                </div>
                <div onClick={logoutConfirm}>
                    <li>
                        <span className="red">
                            🔓&nbsp;&nbsp;&nbsp; 退出登录
                        </span>
                    </li>
                </div>
            </List>
        </Layout>
    )
}
export { Profile }
