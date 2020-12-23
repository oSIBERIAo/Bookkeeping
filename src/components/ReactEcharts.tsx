import React, { useEffect, useRef } from "react"
import * as echarts from "echarts"
import styled from "styled-components"
// import echarts from "echarts/lib/echarts"

type Props = {
    option: any
    width?: string
    height?: string
}

const Wrapper = styled.div`
    //padding: 20px;
    > div {
        //border: 1px solid red;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 3px 14px 0 rgba(233, 231, 241, 0.5);
    }
`

const ReactEcharts = (props: Props) => {
    const { option } = props
    const container = useRef<HTMLDivElement>(null)
    const chart = useRef<any>(null)

    useEffect(() => {
        // console.log("container", container.current)
        const width = document.documentElement.clientWidth
        if (null !== container.current) {
            container.current.style.width = `${width}px`
            container.current.style.height = `300px`
            if (props.width != null) {
                container.current.style.width = props.width
            }
            if (props.height != null) {
                container.current.style.height = props.height
            }
            if (chart.current) {
                chart.current.dispose() // 解决报错 There is a chart instance already initialized on the dom.
            }
            chart.current = echarts.init(container.current, "")
        }
    })
    useEffect(() => {
        chart.current.setOption(option)
    }, [option])

    return (
        <Wrapper>
            <div>
                <div ref={container}></div>
            </div>
        </Wrapper>
    )
}

export { ReactEcharts }
