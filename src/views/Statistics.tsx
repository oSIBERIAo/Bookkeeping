import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { CategorySection } from "./Money/CategorySection"
import styled from "styled-components"
import { useRecords } from "../hooks/useRecords"
import { useTags } from "../hooks/useTags"
import { option1, option2, option3 } from "./Statistics/EchartsOption"

import { ReactEcharts } from "../components/ReactEcharts"
import { Space } from "../components/Space"

const Wrapper = styled.div`
    > div {
        background-color: white;
        width: 90%;
        margin: auto;
        border-radius: 10px;
        overflow: hidden;
        > section {
            padding: 24px 0 10px 0;
            width: 90%;
            margin: auto;
            > ul {
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
    }
    .Breakdown {
        //border: 1px solid green;
        background-color: rgba(0, 0, 0, 0);
        //display: list-item;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
            //display: inline-block;
            //border: 1px solid red;
            width: 31%;
            margin-top: 20px;
            border-radius: 10px;
            :last-child:nth-child(3n - 1) {
                //border: 2px solid green;
                margin-right: calc(35%);
            }
        }
    }
`
const Statistics = () => {
    const [category, setCategory] = useState<string>("-")

    const { selectedRecordsByCategory, records } = useRecords()
    const arrayResult = selectedRecordsByCategory(category)

    const { tags } = useTags()
    const selectedTags = tags.filter((r) => r.category === category)

    const xAxisDate = arrayResult.map((e) => {
        const d = e[0].split("-")
        return d[1] + "月" + d[2]
        // return 1月1日
    })
    const seriesData = arrayResult.map((e) => {
        let sum = 0
        e[1].forEach((m) => {
            sum = sum + parseFloat(m.amount)
        })
        return sum
    })

    const EchartsOption1 = (() => {
        let o = JSON.parse(JSON.stringify(option1))
        o.xAxis.data = xAxisDate
        o.series[0].data = seriesData
        return o
    })()
    const EchartsOption2 = (() => {
        let o = JSON.parse(JSON.stringify(option2))
        o.xAxis.data = xAxisDate
        o.series[0].data = seriesData
        return o
    })()

    // Option3
    type Tag = { id: number; icon: string; name: string; category: string }
    // 单个Tag总金额
    const sumByTags = (e: Tag) => {
        // console.log(e)
        let sum = 0
        records.forEach((r) => {
            if (r.tagIds[0] === e.id) {
                sum = sum + parseFloat(r.amount)
            }
        })
        return sum
    }
    // 总金额
    const sumAmountByRecords = (() => {
        let sum = 0
        records.forEach((r) => {
            sum = sum + parseFloat(r.amount)
        })
        return sum
    })()
    const EchartsOptionByTag = (e: Tag) => {
        // console.log("e", e)
        let o = JSON.parse(JSON.stringify(option3))
        // Tag icon  o.series[2].data[0]
        o.series[2].data[0].name = e.icon
        // Tag name  o.series[2].data[0]
        o.title[0].text = e.name
        // Tag sum 分类消费  o.series[2].data[0]
        let sum = sumByTags(e)
        o.series[2].detail.formatter = function () {
            return "¥" + sum
        }
        // Tag sum 分类消费/总额 百分比  o.series[2].data[0]
        o.series[0].data[0].value = (sum / sumAmountByRecords) * 100
        return o
    }

    return (
        <Layout>
            <Space />
            <Wrapper>
                <div>
                    <CategorySection
                        value={category}
                        onChange={(value) => {
                            setCategory(value)
                        }}
                    />
                    <ReactEcharts option={EchartsOption1}></ReactEcharts>
                </div>
                <br />
                <ReactEcharts option={EchartsOption2}></ReactEcharts>
                <br />
                <div className="Breakdown">
                    {selectedTags.map((e) => {
                        return (
                            <ReactEcharts
                                option={EchartsOptionByTag(e)}
                                width={"100%"}
                                height={"36vw"}
                                key={e.id}
                            ></ReactEcharts>
                        )
                    })}
                </div>
            </Wrapper>
            <br />
            <br />
            <br />
        </Layout>
    )
}
export { Statistics }
