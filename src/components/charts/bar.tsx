import * as React from 'react';
import ReactECharts from "echarts-for-react";

import { barOptions, BarType } from "./options/barOptions";

interface BarChartProps {
    type: BarType;
}

function BarChart({ type }: BarChartProps) {

    const baseOption = { ...barOptions.base }; // not affected by the original base pie options

    // merge baseOption with customOption
    const customOption = barOptions[type] || { series: [] };
    const option = {
        ...baseOption,
        // ...customOption,
        series: (customOption.series || []).map((customSeriesItem, index) => ({
            ...baseOption.series[0],    // Merge with the first element of baseOption.series
            ...customSeriesItem,       // Merge with the corresponding element from customOption.series
        })),
    };

    // const option = { ...barOptions.test }; // not affected by the original base pie options

    return <ReactECharts option={option} />;
}

export default BarChart;