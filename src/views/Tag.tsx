import React from "react"
import { Layout } from "../components/Layout"
import { useTags } from "../useTags"
import { useParams } from "react-router-dom"

const Tag: React.FC = () => {
    const { findTag } = useTags()
    let { id } = useParams<{ id: string }>()
    const tag = findTag(parseInt(id))
    return (
        <Layout>
            <div>{tag.name}</div>
        </Layout>
    )
}

export { Tag }
