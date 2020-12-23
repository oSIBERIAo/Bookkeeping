import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { CategorySection } from "./Money/CategorySection"
import styled from "styled-components"
import { useRecords } from "../hooks/useRecords"
import { useTags } from "../hooks/useTags"
import { Title } from "../components/Title"

const CategoryWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0);
    margin-bottom: 10px;
    > section {
        padding: 0 0 10px 0;
        width: 90%;
        margin: auto;
        > ul {
            background-color: rgba(0, 0, 0, 0);
            border-radius: 40px;
            > li {
                line-height: 20px;
                font-size: 14px;
                padding: 10px;
                border-radius: 40px;
                color: #0d0e56;
                &.selected {
                    font-size: 18px;
                    border-radius: 40px;
                    color: white;
                    background-color: #472fc8;
                }
            }
        }
    }
`

const DetailWrapper = styled.div`
    margin: 0 20px;
    border-radius: 10px;
    overflow: hidden;
`
const Header = styled.h4`
    //outline: 1px solid red;
    padding: 20px 16px 4px 0;
    > div {
        color: #344563;
        opacity: 0.5;
        background: #f2f4f7;
        box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        display: inline-block;
        padding: 2px 14px 2px;
        //border: 1px solid red;
        border-radius: 10px;
    }
`
const Item = styled.div`
    background-color: white;
    padding: 16px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    :last-child {
        border-radius: 0 0 10px 10px;
    }
    :first-child {
        border-radius: 10px 10px 0 0;
    }
    &:not(:last-child):before {
        position: absolute;
        content: "";
        display: block;
        bottom: 0;
        height: 1px;
        width: 90%;
        left: 5%;
        background-color: #f1f4ff;
    }
    > .tags {
        padding-right: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: auto;
    }
    > .amount {
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 10px;
    }
`

const Detail = () => {
    const [category, setCategory] = useState<string>("-")
    const { getIcon, getName } = useTags()

    const { selectedRecordsByCategory } = useRecords()
    const arrayResult = selectedRecordsByCategory(category)

    return (
        <Layout>
            <Title>明细</Title>
            <CategoryWrapper>
                <CategorySection
                    value={category}
                    onChange={(value) => {
                        setCategory(value)
                    }}
                />
            </CategoryWrapper>
            {arrayResult.map(([data, records]) => (
                <DetailWrapper key={data}>
                    <Header>
                        <div>{data}</div>
                    </Header>
                    <div>
                        {records.map((e) => {
                            return (
                                <Item key={e.createdTime}>
                                    <div className="tags">
                                        {e.tagIds.map((tagId) => (
                                            <span key={tagId}>
                                                {getIcon(tagId)}
                                            </span>
                                        ))}
                                    </div>
                                    {e.note ? (
                                        <div className="note">{e.note}</div>
                                    ) : (
                                        <div className="note">
                                            {getName(e.tagIds[0])}
                                        </div>
                                    )}
                                    <div className="amount">¥ {e.amount}</div>
                                </Item>
                            )
                        })}
                    </div>
                </DetailWrapper>
            ))}
            <br />
            <br />
        </Layout>
    )
}
export { Detail }
