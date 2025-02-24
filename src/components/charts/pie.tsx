import * as React from 'react';
import ReactECharts from "echarts-for-react";

import { pieOptions, PieType } from "./options/pieOptions";
import demoData from "src/mocks/data/chartsData.json";


interface PieChartProps {
  type: PieType;
}

function PieChart({ type }: PieChartProps) {

  const baseOption = { ...pieOptions.base }; // not affected by the original base pie options
  // baseOption.series[0] = { ...baseOption.series[0], data: demoData.pie };

  // merge baseOption with customOption
  const customOption = pieOptions[type] || { series: [] };
  const option = {
    ...baseOption,
    ...customOption,
    series: (customOption.series || []).map((customSeriesItem, index) => ({
      ...baseOption.series[0],    // Merge with the first element of baseOption.series
      ...customSeriesItem,       // Merge with the corresponding element from customOption.series
    })),
  };

  return <ReactECharts option={option} />;
}

export default PieChart;