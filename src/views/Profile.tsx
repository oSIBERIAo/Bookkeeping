import React from "react"
import { Layout } from "../components/Layout"
import { Link } from "react-router-dom"
import { Title } from "../components/Title"

const Profile = () => {
    // const [sign, setSign] = useState<string>("up")

    return (
        <Layout>
            <Title>个人</Title>
            <Link to={"/signup"}> 注册</Link>
            <Link to={"/"}> 登录</Link>
        </Layout>
    )
}
export { Profile }
