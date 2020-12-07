import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { CategorySection } from "./Money/CategorySection"
import styled from "styled-components"
import { useRecords } from "../hooks/useRecords"
import { useTags } from "../hooks/useTags"
import dayjs from "dayjs"

const CategoryWrapper = styled.div`
    background-color: white;
`
const Item = styled.div`
    background-color: white;
    padding: 16px 8px;
    border-bottom: 1px solid #666;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .tags {
        padding-right: 20px;
    }
    > .note {
        margin-right: auto;
    }
`
const Statistics = () => {
    const [category, setCategory] = useState<string>("-")
    const { records } = useRecords()
    const { getName } = useTags()
    console.log("getName", getName(1))
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection
                    value={category}
                    onChange={(value) => {
                        setCategory(value)
                    }}
                />
            </CategoryWrapper>
            <div>
                {records.map((e) => {
                    return (
                        <Item key={e.createdTime}>
                            <div className="tags">
                                {e.tagIds.map((tagId) => (
                                    <span key={tagId}>{getName(tagId)}</span>
                                ))}
                            </div>
                            {e.note && <div className="note">{e.note}</div>}
                            <div className="amount">¥ {e.amount}</div>
                            {/*<br />*/}
                            {/*<div className="createdTime">*/}
                            {/*    {dayjs(e.createdTime).format(*/}
                            {/*        "MM月DD日  YYYY年"*/}
                            {/*    )}*/}
                            {/*</div>*/}
                        </Item>
                    )
                })}
            </div>
            {/*{JSON.stringify(records)}*/}
        </Layout>
    )
}
export { Statistics }
