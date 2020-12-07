import { useState } from "react"
import { createId } from "./lib/createId"

const defaultTags = [
    { id: createId(), name: "衣" },
    { id: createId(), name: "食" },
    { id: createId(), name: "住" },
    { id: createId(), name: "行" },
]

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>(
        defaultTags
    )
    const findTag = (id: number) => {
        return tags.filter((tag) => tag.id === id)[0]
    }
    const updateTag = (tag: { id: number; name: string }) => {
        const t = findTag(tag.id)
        const index = tags.indexOf(t)
        const tagsClone = JSON.parse(JSON.stringify(tags))
        tagsClone.splice(index, 1, { id: tag.id, name: tag.name })
        setTags(tagsClone)
    }
    const deleteTag = (tag: { id: number; name: string }) => {
        const t = findTag(tag.id)
        const index = tags.indexOf(t)
        const tagsClone = JSON.parse(JSON.stringify(tags))
        tagsClone.splice(index, 1)
        setTags(tagsClone)
    }
    return { tags, setTags, findTag, updateTag, deleteTag }
}

export { useTags }
