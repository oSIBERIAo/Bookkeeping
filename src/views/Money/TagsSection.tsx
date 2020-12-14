import styled from "styled-components"
import React from "react"
import { useTags } from "../../hooks/useTags"
import { Icon } from "components/Icon"
const Wrapper = styled.section`
    //background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    height: 30vh;
    overflow: scroll;
    @media (max-height: 667px) {
        height: 20vh;
    }
    ol {
        padding: 12px 16px;
        overflow: scroll;
        margin: 0 -12px;
        li {
            background-color: white;
            display: inline-block;
            border-radius: 18px;
            padding: 3px 10px;
            font-size: 20px;
            margin: 4px 12px;
            border: 4px solid white;
            box-shadow: 0 3px 14px 0 rgba(233, 231, 241, 0.5);
            &.selected {
                border: 4px solid #472fc8;
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
    }
    //input {
    //    background: white;
    //    border: none;
    //    padding: 10px 10px;
    //    //border-bottom: 1px solid #666;
    //    border-radius: 10px;
    //    margin-top: 8px;
    //    color: #666;
    //}
`

type Props = {
    value: number[]
    onChange: (selected: number[]) => void
}

const TagsSection: React.FC<Props> = (props) => {
    const { tags, addTag } = useTags()

    const selectedTagIds = props.value
    const setSelectedTags = props.onChange

    const onToggleTags = (tagId: number) => {
        if (selectedTagIds.indexOf(tagId) >= 0) {
            setSelectedTags(selectedTagIds.filter((t) => t !== tagId))
        } else {
            setSelectedTags([...selectedTagIds, tagId])
        }
    }

    const ifSelected = (tagId: number) => {
        return selectedTagIds.indexOf(tagId) >= 0 ? "selected" : ""
    }

    return (
        <Wrapper>
            <ol>
                {tags.map((tag) => (
                    <li
                        onClick={() => {
                            onToggleTags(tag.id)
                        }}
                        key={tag.id}
                        className={ifSelected(tag.id)}
                    >
                        {tag.name.split("@")[0]}
                    </li>
                ))}
                <button onClick={addTag}>
                    <Icon name={"money"} />
                </button>
            </ol>
        </Wrapper>
    )
}

export { TagsSection }
