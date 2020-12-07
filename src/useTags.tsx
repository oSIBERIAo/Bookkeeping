import { useEffect, useState } from "react"
import { createId } from "./lib/createId"
import { useUpdate } from "./hooks/useUpdate"

const defaultTags = [
    { id: createId(), name: "衣" },
    { id: createId(), name: "食" },
    { id: createId(), name: "住" },
    { id: createId(), name: "行" },
]

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([])
    useEffect(() => {
        // console.log("after mount")
        let t = JSON.parse(window.localStorage.getItem("tags") || "[]")
        if (t.length === 0) {
            t = defaultTags
        }
        setTags(t)
    }, [])

    useUpdate(() => {
        window.localStorage.setItem("tags", JSON.stringify(tags))
    }, [tags])

    const findTag = (id: number) => {
        return tags.filter((tag) => tag.id === id)[0]
    }
    const updateTag = (tag: { id: number; name: string }) => {
        const newTags = tags.map((e) => (e.id === tag.id ? { ...tag } : e))
        setTags(newTags)
    }
    const deleteTag = (tag: { id: number; name: string }) => {
        const newTags = tags.filter((e) => e.id !== tag.id)
        setTags(newTags)
    }
    const addTag = () => {
        const newTag = prompt("输入新标签🏷️")
        if (newTag !== null && newTag !== "") {
            setTags([...tags, { id: createId(), name: newTag }])
        }
    }
    return { tags, setTags, findTag, updateTag, deleteTag, addTag }
}

export { useTags }
