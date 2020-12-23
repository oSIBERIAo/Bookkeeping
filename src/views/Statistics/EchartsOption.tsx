const option1 = {
    title: {
        text: "收支统计",
        padding: 20, //标题内边距,
        left: "left", //主副标题的水平位置
        color: "#0D0E56",
    },
    xAxis: {
        data: "", //这里用参数代替
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
            data: "", //这里用参数代替
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

const option2 = {
    title: {
        text: "收支统计",
        padding: 20, //标题内边距,
        left: "left", //主副标题的水平位置
        color: "#0D0E56",
    },
    xAxis: {
        type: "category",
        data: "", //这里用参数代替
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
            color: "#B9BACE",
        },
    },
    series: [
        {
            data: "", //这里用参数代替
            type: "line",
            smooth: true,
            itemStyle: {
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

const option3 = {
    title: [
        {
            text: "旅行",
            top: "60%",
            x: "center",
            textStyle: {
                // fontWeight: "normal",
                fontSize: 12,
                color: "#7B7C98",
            },
        },
    ],
    angleAxis: {
        show: false,
        max: (100 * 360) / 270, //-45度到225度，二者偏移值是270度除360度
        type: "value",
        startAngle: 225, //极坐标初始角度
        splitLine: {
            show: false,
        },
    },
    barMaxWidth: 6, //圆环宽度
    radiusAxis: {
        show: false,
        type: "category",
    },
    //圆环位置和大小
    polar: {
        center: ["50%", "36%"],
        radius: "120%",
    },
    series: [
        {
            type: "bar",
            radius: "50%",
            data: [
                {
                    //上层圆环，显示数据
                    value: 75,
                    itemStyle: {
                        color: {
                            //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 1, //从左到右 0-1
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#472FC8",
                                },
                                {
                                    offset: 1,
                                    color: "#472FC8",
                                },
                            ],
                        },
                    },
                },
            ],
            barGap: "-100%", //柱间距离,上下两层圆环重合
            coordinateSystem: "polar",
            roundCap: true, //顶端圆角
            z: 2, //圆环层级，同zindex
        },
        {
            //下层圆环，显示最大值
            type: "bar",
            radius: "50%",
            data: [
                {
                    value: 100,
                    itemStyle: {
                        color: "#F1F4FF",
                    },
                },
            ],
            barGap: "-100%",
            coordinateSystem: "polar",
            roundCap: true,
            z: 1,
        },
        //仪表盘
        {
            name: "Breakdown",
            type: "gauge",
            radius: "50%",
            startAngle: 225, //起始角度，同极坐标
            endAngle: -45, //终止角度，同极坐标
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            title: {
                offsetCenter: [0, -18],
                color: "#FFFFFF",
                fontSize: "1.5em",
                fontWeight: 500,
                rich: {
                    a: {
                        fontWeight: "normal",
                        fontSize: 16,
                        color: "#FFF",
                        padding: [0, 0, 10, 40],
                    },
                },
            },
            detail: {
                formatter: function () {
                    return "¥100"
                },
                color: "#0D0E56",
                fontSize: 15,
                offsetCenter: [0, 48],
            },
            data: [
                {
                    // value: 75,
                    name: "🚗",
                },
            ],
        },
    ],
}

export { option1, option2, option3 }
