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
    justify-content: flex-end;
    position: fixed;
    bottom: 5.5rem;
    width: 100vw;
    background-color: #f1f4ff;
    //height: 100vh;
`

const CategoryNoteSectionWrapper = styled.div`
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    section {
        background-color: white;
    }
    box-shadow: 0 3px 14px 0 rgba(233, 231, 241, 0.5);
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
            <CategoryNoteSectionWrapper>
                <NoteSection
                    value={selected.note}
                    onChange={(note) => onChang({ note })}
                />
                <CategorySection
                    value={selected.category}
                    onChange={(category) => onChang({ category })}
                />
            </CategoryNoteSectionWrapper>
            <NumberPadSection
                value={selected.amount}
                onChange={(amount) => onChang({ amount })}
                onOK={submit}
            />
        </MyLayout>
    )
}
export { Money }
