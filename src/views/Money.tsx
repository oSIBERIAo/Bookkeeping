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
        tagIds: [] as number[],
        note: "",
        category: "-",
        amount: "0",
    })

    const onChang = (obj: Partial<typeof selected>) => {
        setSelected({ ...selected, ...obj })
    }

    return (
        <MyLayout>
            <TagsSection
                value={selected.tagIds}
                //解构赋值 {(tag) => onChang({ tag : tag })}
                onChange={(tagIds) => onChang({ tagIds })}
            />
            <NoteSection
                value={selected.note}
                onChange={(note) => onChang({ note })}
            />
            <CategorySection
                value={selected.category}
                onChange={(category) => onChang({ category })}
            />
            <NumberPadSection
                value={selected.amount}
                onChange={(amount) => onChang({ amount })}
                onOK={() => {}}
            />
        </MyLayout>
    )
}
export { Money }
