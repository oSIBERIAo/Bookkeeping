import { useEffect, useState } from "react"
import { createId } from "../lib/createId"
import { useUpdate } from "./useUpdate"

const defaultTags = [
    { id: 1, icon: "💰", name: "日常支出", category: "-" },
    { id: 2, icon: "🍕", name: "吃饭", category: "-" },
    { id: 3, icon: "💻", name: "电子消费", category: "-" },
    { id: 4, icon: "🚘", name: "出行", category: "-" },
    { id: 5, icon: "👚", name: "购物", category: "-" },

    { id: 101, icon: "💸", name: "日常收入", category: "+" },
    { id: 102, icon: "🧮", name: "理财", category: "+" },
    { id: 103, icon: "📈", name: "股票", category: "+" },
    { id: 104, icon: "🔖", name: "购物", category: "+" },
    { id: 105, icon: "🐟", name: "闲置出售", category: "+" },
]

type Tag = { id: number; icon: string; name: string; category: string }[]

const useTags = () => {
    const [tags, setTags] = useState<Tag>([])
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
    }, tags)

    const findTag = (id: number) => {
        return tags.filter((tag) => tag.id === id)[0]
    }
    const updateTag = (tag: {
        id: number
        name: string
        icon: string
        category: string
    }) => {
        const newTags = tags.map((e) => (e.id === tag.id ? { ...tag } : e))
        setTags(newTags)
    }
    const deleteTag = (tag: { id: number; name: string }) => {
        const newTags = tags.filter((e) => e.id !== tag.id)
        setTags(newTags)
    }
    const addTag = (newTag: {
        name: string
        category: string
        icon: string
    }) => {
        if (newTag !== null && newTag.name !== "") {
            setTags([
                ...tags,
                {
                    id: createId(),
                    name: newTag.name,
                    icon: newTag.icon,
                    category: newTag.category,
                },
            ])
        }
    }
    const getIcon = (id: number) => {
        const tag = tags.filter((t) => t.id === id)[0]
        return tag ? tag.icon : ""
    }
    const getName = (id: number) => {
        const tag = tags.filter((t) => t.id === id)[0]
        return tag ? tag.name : ""
    }
    return {
        tags,
        setTags,
        findTag,
        updateTag,
        deleteTag,
        getIcon,
        getName,
        addTag,
    }
}

export { useTags }
