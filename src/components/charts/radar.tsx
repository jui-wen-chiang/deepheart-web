import * as React from 'react';
import ReactECharts from "echarts-for-react";

import { radarOptions, RadarType } from "./options/radarOptions";

interface RadarChartProps {
  type: RadarType;
}

function RadarChart({ type }: RadarChartProps) {

  const baseOption = { ...radarOptions.base }; // not affected by the original base pie options

  // merge baseOption with customOption
  const customOption = radarOptions[type] || { series: [] };
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

export default RadarChart;