import * as React from 'react';
import ReactECharts from "echarts-for-react";

import { barOptions, BarType } from "./options/barOptions";

interface BarChartProps {
    type: BarType;
}

function BarChart({ type }: BarChartProps) {

    const basicOption = { ...barOptions.basic }; // not affected by the original basic pie options

    // merge basicOption with customOption
    const customOption = barOptions[type] || { series: [] };
    const option = {
        ...basicOption,
        // ...customOption,
        series: (customOption.series || []).map((customSeriesItem, index) => ({
            ...basicOption.series[0],    // Merge with the first element of basicOption.series
            ...customSeriesItem,       // Merge with the corresponding element from customOption.series
        })),
    };

    // const option = { ...barOptions.test }; // not affected by the original basic pie options

    return <ReactECharts option={option} />;
}

export default BarChart;