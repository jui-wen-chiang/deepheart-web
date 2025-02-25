import * as React from 'react';
import ReactECharts from "echarts-for-react";

import { radarOptions, RadarType } from "./options/radarOptions";

interface RadarChartProps {
  type: RadarType;
}

function RadarChart({ type }: RadarChartProps) {

  const basicOption = { ...radarOptions.basic }; // not affected by the original basic pie options

  // merge basicOption with customOption
  const customOption = radarOptions[type] || { series: [] };
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

export default RadarChart;