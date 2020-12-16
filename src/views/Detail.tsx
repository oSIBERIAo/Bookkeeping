import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { CategorySection } from "./Money/CategorySection"
import styled from "styled-components"
import { useRecords, RecordItem } from "../hooks/useRecords"
import { useTags } from "../hooks/useTags"
import dayjs from "dayjs"

const CategoryWrapper = styled.div`
    background-color: white;
    margin-bottom: 10px;
`
const Header = styled.h4`
    padding: 4px 16px;
`
const Item = styled.div`
    background-color: white;
    padding: 16px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &:before {
        position: absolute;
        content: "";
        display: block;
        bottom: 0;
        height: 1px;
        width: 90%;
        left: 5%;
        background-color: #dad9e7;
    }
    > .tags {
        padding-right: 20px;
        > span {
            background-color: #f1f4ff;
            display: inline-block;
            border-radius: 18px;
            padding: 2px 6px 3px;
            font-size: 20px;
            margin: 0 4px 0 8px;
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
        margin-right: 10px;
    }
`

const Detail = () => {
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

    // 根据日期分类  >  子项根据日期排序
    let arrayResult = Object.entries(result).sort((a, b) => {
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0
    })
    arrayResult.forEach((r) => {
        r[1].sort((a, b) => {
            if (a.createdTime > b.createdTime) return -1
            if (a.createdTime < b.createdTime) return 1
            return 0
        })
    })

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
export { Detail }
