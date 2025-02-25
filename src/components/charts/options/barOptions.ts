const barDefaultData = {
    legend: ['person1', 'person2'],
    lableAxis: ["labe1", "labe2", "labe3", "labe4", "labe5", "labe6", "labe7", "labe8"],
    seriesName: "emotion",
    seriesData: [
        {
            name: "person1",
            stack: 'Total',
            data: [500, 400, 300, null, null, 450, 350, 200, -150, -200, -300]
        },
        {
            name: "person2",
            stack: 'Total',
            type: 'line',
            smooth: true,
            data: [-300, null, 300, 400, 500, 100, 200, null, null, 200, 300]
        },
        {
            name: "Happiness",
            stack: 'Positive',
            data: [4.5, 5.0, 3.2, 0.4, 3.5]
        },
        {
            name: "Joy",
            stack: 'Positive',
            data: [2.5, 1.0, null, 1.4, 2.5]
        },
        {
            name: "Sadness",
            stack: 'Negative',
            data: [null, 3.6, 4.1, 3.4, 0.5]
        },
        {
            name: "Disgust",
            stack: 'Negative',
            data: [0.5, 3.0, 2.9, 5.4, null]
        }
    ]
};

let emphasisStyle = {
    itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
    }
};

let baseTooltip = {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
    formatter: function (params: any) {
        let tar;
        if (params[1] && params[1].value !== '-') {
            tar = params[1];
        } else {
            tar = params[2];
        }
        return tar && tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
    }
}

export const barOptions = {
    base: {
        title: {
            text: 'BarLine Chart'
        },
        tooltip: {},
        legend: {
            data: barDefaultData.legend
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: barDefaultData.lableAxis,
            axisLine: { onZero: true },
            splitLine: { show: true },
            splitArea: { show: false }
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: barDefaultData.seriesData[0].name,
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                data: barDefaultData.seriesData[0].data,
            },
            {
                name: barDefaultData.seriesData[1].name,
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'bottom'
                },
                data: barDefaultData.seriesData[1].data
            }
        ]
    },
    categoryStacking: {
        legend: {
            data: ["bar", "bar2", "bar3", "bar4"],
            left: "10%",
        },
        brush: {
            toolbox: ["rect", "polygon", "lineX", "lineY", "keep", "clear"],
            xAxisIndex: 0,
        },
        toolbox: {
            feature: {
                magicType: {
                    type: ["stack"],
                },
                dataView: {},
            },
        },
        tooltip: {},
        xAxis: {
            type: 'category'
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type: 'bar',
                name: barDefaultData.seriesData[2].name,
                stack: barDefaultData.seriesData[2].stack,
                emphasis: emphasisStyle,
                data: barDefaultData.seriesData[2].data
            },
            {
                type: 'bar',
                name: barDefaultData.seriesData[3].name,
                stack: barDefaultData.seriesData[3].stack,
                emphasis: emphasisStyle,
                data: barDefaultData.seriesData[3].data
            },
            {
                type: 'bar',
                name: barDefaultData.seriesData[4].name,
                stack: barDefaultData.seriesData[4].stack,
                emphasis: emphasisStyle,
                data: barDefaultData.seriesData[4].data
            },
            {
                type: 'bar',
                name: barDefaultData.seriesData[5].name,
                stack: barDefaultData.seriesData[5].stack,
                emphasis: emphasisStyle,
                data: barDefaultData.seriesData[5].data
            }
        ]
    },
    line: {
        series: [
            {
                name: barDefaultData.seriesData[2].name,
                type: 'line',
                stack: 'Total',
                data: barDefaultData.seriesData[2].data,
                smooth: true,
                symbolSize: 20,
                emphasis: {
                    focus: 'series'
                },
                endLabel: {
                    show: true,
                    formatter: '{a}',
                    distance: 20
                },
                lineStyle: {
                    width: 4
                },
                label: {
                    show: true,
                    position: 'top'
                }
            },
            {
                name: barDefaultData.seriesData[3].name,
                type: 'line',
                stack: 'Total',
                smooth: true,
                label: {
                    show: true,
                    position: 'bottom'
                },
                data: barDefaultData.seriesData[3].data
            }
        ]
    },
    markPoint: {
        title: {
            text: 'Temperature Change in the Coming Week'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {},
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [
            {
                name: 'Highest',
                type: 'line',
                data: [10, 11, 13, 11, 12, 12, 9],
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                }
            },
            {
                name: 'Lowest',
                type: 'line',
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
                },
                markLine: {
                    data: [
                        { type: 'average', name: 'Avg' }]
                }
            }
        ]
    }
};

export type BarType = keyof typeof barOptions;