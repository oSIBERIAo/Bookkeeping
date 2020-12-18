import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { CategorySection } from "./Money/CategorySection"
import styled from "styled-components"
import { useRecords } from "../hooks/useRecords"

import { ReactEcharts } from "../components/ReactEcharts"

const CategoryWrapper = styled.div`
    background-color: white;
    margin-bottom: 10px;
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
            textStyle: {
                color: "#0D0E56", //这里用参数代替了
            },
        },
        tooltip: {},
        xAxis: {
            data: xAxisDate,
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#B9BACE", //这里用参数代替了
                },
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
                textStyle: {
                    color: "#B9BACE", //这里用参数代替了
                },
            },
        },
        series: [
            {
                name: "收支",
                type: "bar",
                data: seriesData,
                barWidth: 12,
                itemStyle: {
                    emphasis: {
                        barBorderRadius: [100, 100, 0, 0],
                    },
                    normal: {
                        barBorderRadius: [100, 100, 0, 0],
                        color: "#472FC8",
                    },
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
            <CategoryWrapper>
                <CategorySection
                    value={category}
                    onChange={(value) => {
                        setCategory(value)
                    }}
                />
            </CategoryWrapper>
            <ReactEcharts option={option}></ReactEcharts>
        </Layout>
    )
}
export { Statistics }
