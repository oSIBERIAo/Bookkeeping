import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { CategorySection } from "./Money/CategorySection"
import styled from "styled-components"
import { useRecords, RecordItem } from "../hooks/useRecords"
import { useTags } from "../hooks/useTags"
import dayjs from "dayjs"

const CategoryWrapper = styled.div`
    background-color: white;
`
const Header = styled.h4`
    padding: 4px 16px;
`
const Item = styled.div`
    background-color: white;
    padding: 16px 8px;
    border-bottom: 1px solid #666;
    //margin-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .tags {
        padding-right: 20px;
        > span {
            background-color: #d9d9d9;
            display: inline-block;
            border-radius: 18px;
            padding: 3px 6px;
            font-size: 14px;
            margin: 0 2px;
            &.selected {
                background-color: #6b707c;
                color: white;
            }
        }
    }
    > .note {
        margin-right: auto;
    }
    > .amount {
        margin-left: auto;
    }
`

const Statistics = () => {
    const [category, setCategory] = useState<string>("-")
    const { records } = useRecords()
    const { getName } = useTags()
    const selectedRecords = records.filter((r) => r.category === category)

    let result: { [key: string]: RecordItem[] } = {}
    selectedRecords.forEach((r) => {
        const key = dayjs(r.createdTime).format("YYYY年MM月DD日")
        if (!result.hasOwnProperty(key)) {
            result[key] = []
        }
        result[key].push(r)
    })

    let arrayResult = Object.entries(result).sort((a, b) => {
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0
    })
    // console.log("before > arrayResult", arrayResult)
    arrayResult.forEach((r) => {
        r[1].sort((a, b) => {
            if (a.createdTime > b.createdTime) return -1
            if (a.createdTime < b.createdTime) return 1
            return 0
        })
    })
    // console.log("arrayResult", arrayResult)

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
            {arrayResult.map(([data, records]) => (
                <div key={data}>
                    <Header>{data}</Header>
                    <div>
                        {records.map((e) => {
                            return (
                                <Item key={e.createdTime}>
                                    <div className="tags">
                                        {e.tagIds.map((tagId) => (
                                            <span key={tagId}>
                                                {getName(tagId)}
                                            </span>
                                        ))}
                                    </div>
                                    {e.note && (
                                        <div className="note">{e.note}</div>
                                    )}
                                    <div className="amount">¥ {e.amount}</div>
                                </Item>
                            )
                        })}
                    </div>
                </div>
            ))}
        </Layout>
    )
}
export { Statistics }
