import React, { useState } from "react"
import { Layout } from "../components/Layout"
import styled from "styled-components"
import { TagsSection } from "./Money/TagsSection"
import { CategorySection } from "./Money/CategorySection"
import { NoteSection } from "./Money/NoteSection"
import { NumberPadSection } from "./Money/NumberPadSection"

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`
const Money = () => {
    const [selected, setSelected] = useState({
        tag: [] as string[],
        note: "",
        category: "-",
        amount: "0",
    })
    const changeTagsSection = (tag: string[]) => {
        setSelected({
            ...selected,
            tag,
        })
    }
    const changeNoteSection = (note: string) => {
        setSelected({
            ...selected,
            note,
        })
    }
    const changeCategorySection = (category: string) => {
        setSelected({
            ...selected,
            category,
        })
    }
    const changeNumberPadSection = (amount: string) => {
        setSelected({
            ...selected,
            amount,
        })
    }

    return (
        <MyLayout>
            {selected.tag}
            {selected.note}
            {selected.category}
            <TagsSection
                value={selected.tag}
                onChange={(tag) => {
                    changeTagsSection(tag)
                }}
            />
            <NoteSection
                value={selected.note}
                onChange={(note) => {
                    changeNoteSection(note)
                }}
            />
            <CategorySection
                value={selected.category}
                onChange={(category) => {
                    changeCategorySection(category)
                }}
            />
            <NumberPadSection
                value={selected.amount}
                onChange={(amount) => {
                    changeNumberPadSection(amount)
                }}
                onOK={() => {}}
            />
        </MyLayout>
    )
}
export { Money }
