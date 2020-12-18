import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { CategorySection } from "./Money/CategorySection"
import styled from "styled-components"
import { useRecords } from "../hooks/useRecords"

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
`
const Statistics = () => {
    const [category, setCategory] = useState<string>("-")

    const { selectedRecordsByCategory } = useRecords()
    const arrayResult = selectedRecordsByCategory(category)

    const xAxisDate = arrayResult.map((e) => {
        return e[0].split("月")[1].split("日")[0]
    })
    const seriesData = arrayResult.map((e) => {
        let sum = 0
        e[1].forEach((m) => {
            sum = sum + parseFloat(m.amount)
        })
        return sum
    })

    let option = {
        title: {
            text: "收支统计",
            padding: 20, //标题内边距,
            left: "left", //主副标题的水平位置
            color: "#0D0E56",
        },
        tooltip: {},
        xAxis: {
            data: xAxisDate,
            axisLabel: {
                show: true,
                color: "#B9BACE",
            },
            axisLine: {
                show: false,
                onZero: false,
            },

            axisTick: {
                show: true,
                lineStyle: {
                    color: "#B9BACE",
                },
            },
        },
        yAxis: {
            axisLabel: {
                show: true,
                color: "#B9BACE", //这里用参数代替了
            },
        },
        series: [
            {
                name: "收支",
                type: "bar",
                data: seriesData,
                barWidth: 12,
                itemStyle: {
                    borderRadius: [100, 100, 0, 0], // 统一设置四个角的圆角大小
                    color: "#472FC8",
                },
            },
        ],
        grid: {
            left: "15%",
            right: "20%",
            bottom: 40,
        },
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
                    <ReactEcharts option={option}></ReactEcharts>
                </div>
            </Wrapper>
        </Layout>
    )
}
export { Statistics }
