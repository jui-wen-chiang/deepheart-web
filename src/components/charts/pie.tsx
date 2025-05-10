import * as React from 'react';
import ReactECharts from "echarts-for-react";

import { pieOptions, PieType } from "./options/pieOptions";
import demoData from "src/mocks/data/chartsData.json";


interface PieChartProps {
  type: PieType;
}

function PieChart({ type }: PieChartProps) {

  const basicOption = { ...pieOptions.basic }; // not affected by the original basic pie options
  // basicOption.series[0] = { ...basicOption.series[0], data: demoData.pie };

  // merge basicOption with customOption
  const customOption = pieOptions[type] || { series: [] };
  const option = {
    ...basicOption,
    ...customOption,
    series: (customOption.series || []).map((customSeriesItem, index) => ({
      ...basicOption.series[0],    // Merge with the first element of basicOption.series
      ...customSeriesItem,       // Merge with the corresponding element from customOption.series
    })),
  };

  return <ReactECharts option={option} />;
}

export default PieChart;