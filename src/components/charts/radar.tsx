import * as React from 'react';
import ReactECharts from "echarts-for-react";

const RadarChart = () => {
  const option = {
    title: {
      text: "Emotion",
    },
    tooltip: {},
    legend: {
      data: ["個人A", "個人B"],
    },
    radar: {
      indicator: [
        { name: "攻擊力", max: 100 },
        { name: "防禦力", max: 100 },
        { name: "速度", max: 100 },
        { name: "技巧", max: 100 },
        { name: "魔力", max: 100 },
      ],
    },
    series: [
      {
        name: "能力對比",
        type: "radar",
        data: [
          {
            value: [80, 90, 70, 85, 60],
            name: "個人A",
          },
          {
            value: [60, 80, 75, 70, 90],
            name: "個人B",
          },
        ],
      },
    ],
  };

  return (
    // <div style={{ width: "100%", height: "400px" }}>
      <ReactECharts option={option} style={{ width: "100%", height: "100%" }} />
    // </div>
  );
};

export default RadarChart;
