import styled from "styled-components"
import React from "react"
import { useTags } from "../../useTags"

const Wrapper = styled.section`
    background-color: #fff;
    padding: 12px 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    ol {
        margin: 0 -12px;
        li {
            background-color: #d9d9d9;
            display: inline-block;
            border-radius: 18px;
            padding: 3px 16px;
            font-size: 14px;
            margin: 4px 12px;
            &.selected {
                background-color: #6b707c;
                color: white;
            }
        }
    }
    button {
        background: none;
        border: none;
        padding: 2px 4px;
        border-bottom: 1px solid #666;
        margin-top: 8px;
        color: #666;
    }
`

type Props = {
    value: string[]
    onChange: (selected: string[]) => void
}

const TagsSection: React.FC<Props> = (props) => {
    // const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"])
    const { tags, setTags } = useTags()

    // const [selectedTags, setSelectedTags] = useState<string[]>([])
    const selectedTags = props.value
    const setSelectedTags = props.onChange

    const onAddTag = () => {
        const newTag = prompt("输入新标签🏷️")
        if (newTag !== null) {
            setTags([...tags, newTag])
        }
    }

    const onToggleTags = (tag: string) => {
        if (selectedTags.indexOf(tag) >= 0) {
            setSelectedTags(selectedTags.filter((t) => t !== tag))
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    }

    const ifSelected = (tag: string) => {
        return selectedTags.indexOf(tag) >= 0 ? "selected" : ""
    }

    return (
        <Wrapper>
            <ol>
                {tags.map((tag) => (
                    <li
                        onClick={() => {
                            onToggleTags(tag)
                        }}
                        key={tag}
                        className={ifSelected(tag)}
                    >
                        {tag}
                    </li>
                ))}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}

export { TagsSection }
