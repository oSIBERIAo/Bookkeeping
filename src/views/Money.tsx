import React, { useState } from "react"
import { Layout } from "../components/Layout"
import styled from "styled-components"
import { TagsSection } from "./Money/TagsSection"
import { CategorySection } from "./Money/CategorySection"
import { NoteSection } from "./Money/NoteSection"
import { NumberPadSection } from "./Money/NumberPadSection"
import { useRecords } from "../hooks/useRecords"

const defaultSelected = {
    tagIds: [] as number[],
    note: "",
    category: "-",
    amount: "0",
}

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`

const CategorySectionWrapper = styled.div`
    background-color: #c4c4c4;
`

const Money = () => {
    const [selected, setSelected] = useState(defaultSelected)

    const { addRecord } = useRecords()

    const onChang = (obj: Partial<typeof selected>) => {
        setSelected({ ...selected, ...obj })
    }

    const submit = () => {
        if (addRecord(selected)) {
            alert("保存成功")
            setSelected(defaultSelected)
        } else {
            alert("保存失败")
        }
    }

    return (
        <MyLayout>
            <TagsSection
                value={selected.tagIds}
                //解构赋值 {(tagIds) => onChang({ tagIds : tagIds })}
                onChange={(tagIds) => onChang({ tagIds })}
            />
            <NoteSection
                value={selected.note}
                onChange={(note) => onChang({ note })}
            />
            <CategorySectionWrapper>
                <CategorySection
                    value={selected.category}
                    onChange={(category) => onChang({ category })}
                />
            </CategorySectionWrapper>
            <NumberPadSection
                value={selected.amount}
                onChange={(amount) => onChang({ amount })}
                onOK={submit}
            />
        </MyLayout>
    )
}
export { Money }
